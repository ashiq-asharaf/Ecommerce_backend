const express = require('express');
const { validatePublic, validate } = require('../../middlewares/validate');
const productValidation = require('../../validations/product.validation');
const productController = require('../../controllers/product.controller');
// const { validate } = require('../../models/token.model');
const router = express.Router();


//Add product Enpoint
router.post('/insertProduct', validatePublic(productValidation.insertProduct), productController.addProduct);
router.post('/getProduct/men', validate(productValidation.getProductDetails), productController.getProductDetails);


module.exports = router;

