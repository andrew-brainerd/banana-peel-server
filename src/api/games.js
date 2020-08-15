const games = require('express').Router();
const gamesData = require('../data/games');
const status = require('../utils/statusMessages');
const { validator } = require('../utils/validator');
const { getGamesQuery, defaultGameParams } = require('./validation/games');

games.get('/', validator.query(getGamesQuery), async (req, res) => {
  const { query: { pageNum, pageSize, playerId } } = req;
  const page = parseInt(pageNum) || 1;
  const size = parseInt(pageSize) || 50;

  const { items, totalItems, totalPages } = await gamesData.getGames(page, size, playerId);

  if (!items) return status.serverError(res, 'Failed', 'Failed to get games');

  return status.success(res, {
    items,
    pageNum: page,
    pageSize: size,
    totalItems,
    totalPages
  });
});

games.get('/:gameId/settings', validator.params(defaultGameParams), async (req, res) => {
  const { params: { gameId } } = req;

  const game = await gamesData.getGameSettings(gameId);
  return status.success(res, { ...game });
});

games.get('/:gameId/metadata', validator.params(defaultGameParams), async (req, res) => {
  const { params: { gameId } } = req;

  const game = await gamesData.getGameMetadata(gameId);
  return status.success(res, { ...game });
});

games.get('/:gameId/stats', validator.params(defaultGameParams), async (req, res) => {
  const { params: { gameId } } = req;

  const game = await gamesData.getGameStats(gameId);
  return status.success(res, { ...game });
});

games.get('/:gameId/frames', validator.params(defaultGameParams), async (req, res) => {
  const { params: { gameId } } = req;

  const game = await gamesData.getGameFrames(gameId);
  return status.success(res, { ...game });
});

module.exports = games;
