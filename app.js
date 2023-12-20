const express = require('express');
const app = express();
const morgan = require('morgan');


const productRoute = require("./api/routes/products")
const ordersRoute = require("./api/routes/orders")
//app.use(express.json);
app.use(morgan('dev'))

app.use("/product",productRoute);
app.use("/order",ordersRoute);

app.use((req,res,next)=>{
    const error = new Error('Bulunmadı');
    error.status = 404;
    next(error);

})

app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;