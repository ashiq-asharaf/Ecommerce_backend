const express = require('express');
const { validatePublic, validate } = require('../../middlewares/validate');
const productValidation = require('../../validations/product.validation');
const productController = require('../../controllers/product.controller');
// const { validate } = require('../../models/token.model');
const router = express.Router();
const jwt_middleware = require('../../middlewares/auth2')


//Add product Enpoint
router.post('/insertProduct',jwt_middleware, validatePublic(productValidation.insertProduct), productController.addProduct);
router.post('/getProduct/men',jwt_middleware, validate(productValidation.getProductDetails), productController.getProductDetails);


module.exports = router;

