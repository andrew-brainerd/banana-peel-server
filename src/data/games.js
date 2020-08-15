const { default: SlippiGame } = require('@slippi/slippi-js');
const data = require('../utils/data');
const { GAMES_COLLECTION } = require('../constants/collections');

const getGames = async (page, size, playerId) => {
  return await data.getSome(GAMES_COLLECTION, page, size, 'createdBy', playerId);
};

const getGame = async gameId => {
  return new SlippiGame('assets/Game_20200815T135732.slp');
  // return await data.getById(GAMES_COLLECTION, gameId);
};

const getGameSettings = async gameId => {
  const game = await getGame(gameId);
  return game.getSettings();
};

const getGameMetadata = async gameId => {
  const game = await getGame(gameId);
  return game.getMetadata();
};

const getGameStats = async gameId => {
  const game = await getGame(gameId);
  return game.getStats();
};

const getGameFrames = async gameId => {
  const game = await getGame(gameId);
  return game.getFrames();
};

module.exports = {
  getGames,
  getGameSettings,
  getGameMetadata,
  getGameStats,
  getGameFrames
};
