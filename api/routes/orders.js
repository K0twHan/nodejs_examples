const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const checkAuth = require('../middleware/check-auth')
const Order = require('../models/order')


router.get("/",checkAuth,(req,res,next)=>{
    Order.find().select("_id product quantity")
    .exec()
    .then(docs => {
        res.status(200).json({
            count : docs.length,
            orders : docs.map(doc => {return {
                _id : doc._id,
                product : doc.product,
                quantity : doc.quantity,
                request : {
                    type : 'GET',
                    url : 'http://localhost:3000/order/' + doc._id
                }
            }}),
           
        })
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error : err})
    })
})

router.get("/:orderId",checkAuth,(req,res,next)=>{
    res.status(200).json({

        message : "sipariş alındı",
        orderId : req.params.orderId
    })
})



router.post("/",checkAuth,(req,res,next)=>{
    const order = new Order({
        _id : new mongoose.Types.ObjectId(),
        quantity : req.body.quantity,
        product : req.body.productId

    });
    order.save()
    .then(result => {
        console.log(result);
        res.status(201).json(result)
    })
    .catch(err =>{
        res.status(500).json(err)
    })

})

module.exports = router