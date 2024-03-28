const joi = require('joi');

const checkLogin = joi.object().keys({
    memberLogin: joi.string().allow('').required(),
    memberPwd: joi.string().allow('').required()
  });

  module.exports = {
    checkLogin
  }