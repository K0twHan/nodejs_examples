const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dbConnect = require('./config/dbConnection')


const productRoute = require("./api/routes/products");
const ordersRoute = require("./api/routes/orders");
const userRoute = require('./api/routes/users');

//app.use(express.json);
app.use(morgan('dev'));
app.use('/uploads',express.static('uploads'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

dbConnect();


app.use((req,res,next)=>{
    res.header('Acces-Control-Allow-Origin', '*');
    res.header('Acces-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Acces, Authorization');
    if(req.method === 'OPTIONS')
    {
        res.header('Acces-Control-Allow-Methods','PUT, POST, PATCH, DELETE , GET ');
        res.status(200).json({});
    }
    next();
})

app.use("/product",productRoute);
app.use("/order",ordersRoute);
app.use("/user",userRoute);


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