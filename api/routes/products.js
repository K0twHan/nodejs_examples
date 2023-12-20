const express = require('express');
const router = express.Router();

router.get("/",(req,res,next)=>{
    res.status(200).json({
        message : "products router get kısmı"
    })
});

router.post("/",(req,res,next)=>{
    res.status(200).json({
        message : "products router post kısmı"
    })
});

router.get("/:productId",(req,res,next)=>{
    const id = req.params.productId;
    if(id === "special")
    {
        res.status(200).json({
            message: "Özel idye özel mesaj"
        })
    }
    else{
        res.status(200).json({
            message : "belirttiğiniz idnin mesajı"
        })
    }
})

router.patch("/:productId",(req,res,next)=>{
    res.status(200).json({
        message : "ürün güncellendi"
    })
})

router.delete("/:productId",(req,res,next)=>{
    res.status(200).json({
        message : "ürün silindi"
    })
})

module.exports = router;