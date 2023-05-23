const Product = require('../models/product')
const dotenv = require('dotenv')
const connectDatabase = require('../config/database')

const products = require('../data/products')


dotenv.config({path: 'backend/config/config.env'})

connectDatabase()

const seedProducts = async () => {
    try {
            await Product.deleteMany()
            console.log('All products are deleted')

            await Product.insertMany(products)
            console.log('All products are added')
            process.exit()

    }catch(err) {
        console.log(error.message)
        process.exit()
    }
}
seedProducts()