const validateInput = require('./validateInput');

const validateWatchedAt = (talk, res) => {
  if (talk === undefined) {
    return validateInput(talk, res, 'talk');
  } if (talk.watchedAt === undefined) {
    return validateInput(talk.watchedAt, res, 'watchedAt');
  }
    
  const regexData = /^(0[1-9]|[1-2]\d|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

  if (!regexData.test(talk.watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
};

module.exports = validateWatchedAt;