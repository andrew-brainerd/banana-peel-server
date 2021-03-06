const games = require('express').Router();
const gamesData = require('../data/games');
const status = require('../utils/statusMessages');
const { validator } = require('../utils/validator');
const { getGamesQuery, defaultGameParams, postGameBody } = require('./validation/games');

games.get('/', validator.query(getGamesQuery), async (req, res) => {
  const { query: { pageNum, pageSize, connectCode } } = req;
  const page = parseInt(pageNum) || 1;
  const size = parseInt(pageSize) || 50;

  const { items, totalItems, totalPages } = await gamesData.getGames(page, size, connectCode);

  if (!items) return status.serverError(res, 'Failed', 'Failed to get games');

  return status.success(res, {
    items,
    pageNum: page,
    pageSize: size,
    totalItems,
    totalPages
  });
});

games.get('/id/:gameId', validator.params(defaultGameParams), async (req, res) => {
  const { params: { gameId } } = req;

  const game = await gamesData.getGameById(gameId);
  return status.success(res, { ...game });
});

games.get('/gameId/:gameId', validator.params(defaultGameParams), async (req, res) => {
  const { params: { gameId } } = req;

  const game = await gamesData.getGameByGameId(gameId);
  return status.success(res, { ...game });
});

games.post('/', validator.body(postGameBody), async (req, res) => {
  const { body: { data } } = req;

  const game = await gamesData.addGame(data);
  return status.success(res, { ...game });
});

module.exports = games;
