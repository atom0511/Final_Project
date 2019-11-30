const mongoose = require("mongoose");

let ProductSchema = new mongoose.Schema({
    sku: String,
    title: String,
    description: String,
    availableSizes: Array,
    style: String,
    price: Number,
    installments: Number,
    currencyID: String,
    currencyFormat: String,
    isShippingFree: Boolean,
    imgLink: String
}, {
    _id: true,
    timestamps: true
});

// productModel dieu khien collection 'products'
let ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel;