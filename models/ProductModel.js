const mongoose = require('mongoose');

// const productSchema = mongoose.Schema({
//     title: String,
//     price: Number,
//     category: String,
//     description: String,
//     image: String,
//     rating: {
//         rate: Number,
//         count: Number
//     }
// })

const ratingSchema = mongoose.Schema({
    rate: Number,
    count: Number
})

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "This field cannot be left empty"],
        unique: true,
        minlength: 100,
        maxlength: 500,
        validate: function () {
            return this.includes('cloth') ? true : false
        }
    },
    price: {
        type: Number,
        min: 1,
        max: 1000
    },
    category: String,
    description: String,
    image: String,
    rating: ratingSchema
})

const ProductModel = mongoose.model('product', productSchema);

module.exports = ProductModel