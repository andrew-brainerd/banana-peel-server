const data = require('../utils/data');
const log = require('../utils/log');
const { GAMES_COLLECTION } = require('../constants/collections');

const getGames = async (page, size, username) => {
  log.cool(`Get Games for ${username}`);
  return await data.getSome(
    GAMES_COLLECTION,
    page,
    size,
    'username',
    username,
    { frames: 0 },
    { gameId: -1 }
  );
};

const getGame = async gameId => {
  log.cool(`Get Game ${gameId}`);
  return await data.getById(GAMES_COLLECTION, gameId);
};

const addGame = async gameData => {
  log.cool(`Add Game ${Object.keys((gameData || {}).metadata)}`);
  return await data.insertOne(GAMES_COLLECTION, gameData);
};

module.exports = {
  getGames,
  getGame,
  addGame
};
