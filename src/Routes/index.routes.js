const express = require('express');

const router = express.Router();

const talkerRoute = require('./talker.routes');
const loginRoute = require('./login.routes');

router.use('/talker', talkerRoute);
router.use('/login', loginRoute);

module.exports = router;