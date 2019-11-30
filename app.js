const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

let app = express();
// view engine
app.engine("handlebars", handlebars({ defaultLayout: "defautLayout" }));
app.set("view engine", `handlebars`);
app.use(bodyParser.urlencoded({ extended: false }));
//public folder
app.use(express.static("public"));
//dataBase
let dbLink = `mongodb://localhost/final-database`;
mongoose.connect(dbLink, { useNewUrlParser: true }, err => {
    if (err) {
        console.log("err database");
    } else {
        console.log("Connected database");
    }
});
let port = 6061;
app.listen(6061, err => {
    if (err) {
        console.log("error app listen: ", err);
    } else {
        console.log(`App listen at ${port}`);
    }
});

//set routers
const homeRouter = require("./routers/homeRouter");
app.use("/", homeRouter);