const joi = require('joi');

const insertProduct = joi.object().keys({
    name: joi.string().required(),
    category: joi.string().required(),
    image: joi.string().required(),
    new_price: joi.number().required(),
    old_price: joi.number().required(),
    created_date: joi.date(),
    user_id: joi.number().required(),
    available_size: joi.array().required(),
    tags: joi.array().required(),
    description: joi.string().required(),
    quantity: joi.object().required(),
    header_name: joi.string().required(),
    summary: joi.string().required(),
})

const getProductDetails = joi.object().keys({
    userId: joi.number().required(),
    category: joi.string().required()
})

module.exports = {
    insertProduct,
    getProductDetails
}