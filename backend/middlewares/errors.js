const ErrorHandler = require('../utils/errorHandler')

module.exports = (req, res, next) => {
    err.statusCode = err.statusCode || 500
    
    if(process.env.NODE_ENV === 'DEVELOPMENT') {
        res.status(err.statusCode).json({
            success: false,
            error: err,
            errMessage: err.message,
            stack: err.stack
        })
    }

    if(process.env.NODE_ENV === 'PRODUCTION') {
        let error = { ...err }
        error.message = err.message

        // wrong mongoose object id error
        if (err.name === 'CastError') {
            const message = `Resource not found. Invalid: ${err.path}`
            error = new ErrorHandler(message, 400)
        }
        // handling mongoose validation error

        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map(value=>value.message)
            error = new ErrorHandler(message, 400)
        }

        res.status(error.statusCode).json({
            success: false,
            message: error.message ||  'Internal Server Error'
        })
    
    }
}

// const {CustomHttpError} = require('../utils/errorHandler')

// function errorHandler(err, req, res, next) {
//   // default HTTP status code and error message
//   let httpStatusCode = 500;
//   let message = "Internal Server Error";

//   // if the error is a custom defined error
//   if (err instanceof CustomHttpError) {
//     httpStatusCode = err.httpStatusCode;
//     message = err.message;
//   } else {
//     // hide the detailed error message in production
//     // for security reasons
//     if (process.env.NODE_ENV !== 'PRODUCTION') {
//       // since in JavaScript you can also
//       // directly throw strings
//       if (typeof err === "string") {
//         message = err;
//       } else if (err instanceof Error) {
//         message = err.message;
//       }
//     }
//   }

//   let stackTrace = undefined;

//   // return the stack trace only when
//   // developing locally or in stage
//   if (process.env.NODE_ENV !== "production") {
//     stackTrace = err.stack;
//   }

//   // logg the error
//   console.error(err);
//   // other custom behaviors...

//   // return the standard error response
//   res.status(httpStatusCode).send({
//     error: {
//       message: message,
//       timestamp: err.timestamp || undefined,
//       documentationUrl: err.documentationUrl || undefined,
//       stackTrace: stackTrace,
//     },
//   });

//   return next(err);
// }

// module.exports =  errorHandler