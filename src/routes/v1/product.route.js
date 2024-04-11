const express = require('express');
const { validatePublic } = require('../../middlewares/validate');
const productValidation = require('../../validations/product.validation');
const productController = require('../../controllers/product.controller');
const router = express.Router();


//Add product Enpoint
router.post('/insert_product', validatePublic(productValidation.insertProduct), productController.addProduct);


module.exports = router;

