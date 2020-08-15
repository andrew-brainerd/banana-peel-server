const Joi = require('joi');

const getGamesQuery = Joi.object({
  gameId: Joi.string().required()
});

const defaultGameParams = Joi.object({
  gameId: Joi.string().required()
});

module.exports = {
  getGamesQuery,
  defaultGameParams
};
