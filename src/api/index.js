const router = require('express').Router();
const appInfo = require('../../package.json');

router.get('/', (req, res) => {
  res.send({
    message: `Welcome to the Banana Peel API v${appInfo.version}!`
  });
});

router.use('/games', require('./games'));

module.exports = router;
