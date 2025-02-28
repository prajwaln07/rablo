const mongoose = require('mongoose')

//schema for user collection in db
const ProductSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    } ,
    description: {
        type: String,
    } ,
    image: {
        type: String, 
    },
    price: {
        type: String,
    },
    category: {
        type: String,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    rating:{
        type:Number,
        default:0,
    }
})

const ProductModel = mongoose.model("products",ProductSchema)
module.exports = ProductModel