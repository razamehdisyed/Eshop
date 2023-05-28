const User = require('../models/user')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const sendToken = require('../utils/jwtToken')
const sendEmail = require('../utils/sendEmail')
const crypto = require('crypto')

// Register a user  => api/v1/register

exports.registerUser = catchAsyncErrors( async (req, res, next) => {
    const { name, email, password} = req.body
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: '',
            url: ''
        }
    })

    sendToken(user, 200, res)
})

// Login a user  => api/v1/login

exports.loginUser = catchAsyncErrors( async(req, res, next) => {
    const { email, password} = req.body

    // checks if email and password are entered by user
    if(!email || !password) {
        return next(new ErrorHandler('Please enter email and password', 400))
    }

    //finding user in database
    const user = await User.findOne({email}).select('+password')

    if(!user) {
        return next(new ErrorHandler('Invalid email', 401))
    }
    //checks if password is correct or not

    const isPasswordMatched = await user.comparePassword(password)
    if(!isPasswordMatched) {
        return next(new ErrorHandler('Incorrect password', 401))
    }
    sendToken(user, 200, res)
})

//forgot password  => api/v1/password/forgot

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({email: req.body.email})

    if (!user) {
        return next(new ErrorHandler('User not found with this email', 404))
    }

    //get reset password token

    const resetToken = user.getResetPasswordToken()
    await user.save({validateBeforeSave: false})

    //create reset password url

    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`
    const message = `Your password reset token is as follows:\n\n${resetUrl}\n\n If you have not requested password reset, Please ignore it.`

    try {
        await sendEmail({
            email: user.email,
            subject: 'Eshop password recovery',
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to: ${user.email}`
        })

    } catch (error) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined
        
        await user.save({validateBeforeSave: false})
        return next(new ErrorHandler(error.message, 500))
    }

})

//reset password  => api/v1/password/reset/:token

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    
    // hash URL token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {$gt: Date.now()}
    })

    if(!user) {
        return next(new ErrorHandler('Password reset token is invalid or expired', 400))
    }
    if(req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler('Password does not match', 401))
    }

    //setup new password
    user.password = req.body.password

    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save()

    sendToken(user, 200, res)
})
//get logged in user profile  =>  /api/v1/me

exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id)

    res.status(200).json({
        success: true,
        user
    })
})

//logout user  => api/v1/logout

exports.logout = catchAsyncErrors(async (req, res, next) => {

    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
})