const express = require('express');
const catchAsync = require('../utils/catchAsync');
const productServices = require('../services/product.service');




const addProduct = catchAsync(async (req, res ) => {
    try {
        const data = req.body;
        const response = await productServices.addProduct(data);
    res.status(200).send(response);
    } catch(err) {
        res.status(500).send({ status_value: "0", message:"Internal Server Error", err});
    }
    
});


module.exports = {
    addProduct,
}