const Joi = require('joi');

const postUserBody = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required()
});

const getUserByEmailQuery = Joi.object({
  email: Joi.string()
});

module.exports = {
  postUserBody,
  getUserByEmailQuery
};
