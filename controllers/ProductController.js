const ProductModel = require("../models/ProductModels");

async function createProduct(product) {
    let newData = ProductModel(product);
    await newData.save((err, data) => {
        if (err) {
            console.log("err create product: ", err);
        } else {
            console.log("creat product successful");
        }
    });
}

async function readAllProduct() {
    let allData = await ProductModel.find({});
    let data = [];
    allData.forEach(element => {
        if (element.availableSizes.length > 0) data.push(element);
    });
    return allData;
}

async function updateProduct(product) {
    await ProductModel.findById({ _id: product._id });
    await ProductModel.updateOne({}, product, (err, data) => {
        if (err) {
            console.log("err update product: ", err);
        } else {
            console.log("update product successful");
        }
    });
}

async function deleteProduct(product) {
    await ProductModel.deleteOne({ _id: product._id }, (err, data) => {
        if (err) {
            console.log("err delete product: ", err);
        } else {
            console.log("delete product successful");
        }
    });
}

module.exports = {
    createProduct: createProduct,
    readProduct: readAllProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct
};