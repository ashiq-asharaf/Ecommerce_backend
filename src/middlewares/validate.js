const Joi = require('joi');
const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');

const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ['params', 'query', 'body']);
  const object = pick(req, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' }, abortEarly: false })
    .validate(object);

  if (error) {
    const errorMessage = error.details.map((details) => details.message).join(', ');
    return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
  }
  Object.assign(req, value);
  return next();
};

function validateSchema(schema, req, next) {
  const validationResult = schema.validate(req.body, { abortEarly: false });
  if (!validationResult.error) {
    req.schema = validationResult.value; // eslint-disable-line no-param-reassign
    return next();
  }
  const details = [];
  validationResult.error.details.forEach((d) => details.push(d.message));
  const newerr = new Error(details.join());
  newerr.code = 400;
  newerr.name = validationResult.error.name;
  return next(newerr);
 
}

function validatePublic(schema) {
  return (req, res, next) => validateSchema(schema, req, next);
}

module.exports = {
  validate,
  validatePublic
}
