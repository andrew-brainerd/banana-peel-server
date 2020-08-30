const Joi = require('joi');

const getGamesQuery = Joi.object({
  pageNum: Joi.number(),
  pageSize: Joi.number(),
  connectCode: Joi.string().required()
});

const defaultGameParams = Joi.object({
  gameId: Joi.string().required()
});

const postGameBody = Joi.object({
  data: Joi.object().required()
});

module.exports = {
  getGamesQuery,
  defaultGameParams,
  postGameBody
};
