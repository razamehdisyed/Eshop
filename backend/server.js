const app = require('./app')
const dotenv = require('dotenv')
const connectDatabase = require('./config/database')


// Handle Uncaught exceptions
process.on('uncaughtException', err =>{
    console.log(`Error: ${err.message}`)
    console.log('Shutting down due to uncaught exception')
    process.exit(1)
})


//setting up config file

dotenv.config({path: 'backend/config/config.env'})
//connecting to database
connectDatabase()

const server = app.listen(process.env.PORT, ()=> {
    console.log(`Server started on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode `)
})

//Handle unhandled promise rejection errors
process.on('unhandledRejection', err =>{
    console.log(`Error: ${err.message}`)
    console.log('Shutting down server due to unhandled promise rejection')
    server.close(() =>{
    process.exit(1)
})
})