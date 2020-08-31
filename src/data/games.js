const data = require('../utils/data');
const log = require('../utils/log');
const { GAMES_COLLECTION } = require('../constants/collections');

const getGames = async (page, size, connectCode) => {
  log.cool(`Get Games for ${connectCode}`);
  return await data.getSome(
    GAMES_COLLECTION,
    page,
    size,
    'connectCode',
    connectCode,
    { frames: 0 },
    { gameId: -1 }
  );
};

const getGameById = async gameId => {
  log.cool(`Get Game with ID ${gameId}`);
  return await data.getById(GAMES_COLLECTION, gameId);
};

const getGameByGameId = async gameId => {
  log.cool(`Get Game with Game ID ${gameId}`);
  return await data.getByProperty(GAMES_COLLECTION, 'gameId', gameId);
};

const addGame = async gameData => {
  log.cool(`Add Game ${(gameData || {}).gameId}`);
  return await data.insertOne(GAMES_COLLECTION, gameData);
};

module.exports = {
  getGames,
  getGameById,
  getGameByGameId,
  addGame
};
