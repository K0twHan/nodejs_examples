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

module.exports = router