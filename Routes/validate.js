const joi = require("joi");
const jwt = require("jsonwebtoken");

function validateSchema(schema, req, next) {
    joi.validate(req.body, schema, {abortEarly: false}, (err, schemaResult) => {
        if(!err) {
            req.schema = schemaResult;
            return next();
        }
        const details=[];
        err.details.forEach((d) => details.push(d.message));
        const newer = new Error(details.join());
        newer.code = 400;
        newer.name = err.name;
        return next(newer);
    });
}


function validatePublic(schema) {
    return (req, res, next) => validateSchema(schema, req, next);
}

module.exports = {
    validatePublic
}