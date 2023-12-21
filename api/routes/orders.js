const express = require('express')
const router = express.Router()

router.get("/",(req,res,next)=>{
    res.status(200).json({

        message : "sipariş alındı"
    })
})

router.get("/:orderId",(req,res,next)=>{
    res.status(200).json({

        message : "sipariş alındı",
        orderId : req.params.orderId
    })
})



router.post("/:orderId",(req,res,next)=>{
    const order = {
        orderName : req.body.orderName,
        orderPrice : req.body.orderPrice
    }
    res.status(201).json({

        message : "sipariş alındı",
        orderId : req.params.orderId,
        Order : order
    })
})

module.exports = router