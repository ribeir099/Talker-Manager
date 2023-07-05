const express = require('express');
const validators = require('../middlewares');

const router = express.Router();

const generateToken = require('../utils/generateToken');

router.post('/',
  validators.validateLogin,
  async (_req, res) => {
    try {
      // const { email, password } = req.body;
      const token = generateToken();

      res.status(200).json({ token });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

module.exports = router;