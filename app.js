const express = require('express');
const app = express();

const productRoute = require("./api/routes/products")
const ordersRoute = require("./api/routes/orders")
//app.use(express.json);
app.use("/product",productRoute);
app.use("/order",ordersRoute);

module.exports = app;