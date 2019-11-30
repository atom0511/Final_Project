const Router = require("express").Router();
const {
    createProduct,
    readProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/ProductController");

Router.get("/", async(req, res) => {
    console.log("get / ");
    res.render("homePage", {
        sku: "lalalala",
        title: "lalalaalla"
    });
});
Router.get("/create_product", async(req, res) => {
    console.log("get create product ");
    let newProduct = {
        sku: "Ao" + Math.floor(Math.random() * 100000),
        title: "Thuc ra no la quan day",
        description: "Khong phai dau no la ao",
        availableSizes: [`S`, `XL`, `XXL`],
        style: `3 soc`,
        price: Math.floor(Math.random() * 100000),
        installments: Math.floor(Math.random() * 100),
        currencyID: "AAAA1111",
        currencyFormat: "$",
        isShippingFree: true,
        imgLink: "https://azpet.com.vn/wp-content/uploads/2019/01/Cho-Pug-Mat-Xe-10.jpg"
    };
    // await createProduct(newProduct);
    res.render("homePage");
});

Router.get("/read_product", async(req, res) => {
    console.log("get read product");
    let data = await readProduct();
    res.render("homePage", {
        data: data
    });
});
Router.get("/update_product", (req, res) => {
    res.render("homePage");
});
Router.get("/delete_product", (req, res) => {
    res.render("homePage");
});
module.exports = Router;