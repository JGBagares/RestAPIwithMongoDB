const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    }
})

const Products = mongoose.model('product_details', productSchema);
module.exports = Products;