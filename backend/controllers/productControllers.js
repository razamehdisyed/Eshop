const Product = require('../models/product')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const APIFeatures = require('../utils/apifeatures')

// Create new product => /api/v1/admin/product/new

exports.newProduct = catchAsyncErrors(async(req, res, next) => {
    const product = await Product.create(req.body)

    res.status(201).json({
        success: true,
        product
    })
})

// Get all products  => /api/v1/products
exports.getProducts = catchAsyncErrors(async (req, res, next)=> {

    const apifeatures = new APIFeatures(Product.find(),req.query)
                        .search()

    const products = await apifeatures.query

    res.status(200).json({
        success : true,
        count : products.length,
        products
    })
})
// Get single product  => /api/v1/product/:id

exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id)
     
    if(!product) {
        return next(new ErrorHandler('Product not found', 404))
    }

    res.status(200).json({
        success:true,
        product
    })
})
// Update a product  => /api/v1/admin/product/:id

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id)

    if(!product) {
        return next(new ErrorHandler('Product not found', 404))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false        
    })
        return res.status(200).json({
            success: true,
            product
        })
})
// delete a product  => /api/v1/admin/product/:id
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id)

    if(!product) {
        return next(new ErrorHandler('Product not found', 404))
    }
    
        // await product.remove()
        await Product.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'Product is deleted'
        })
})