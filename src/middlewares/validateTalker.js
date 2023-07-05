const validateAge = require('./validateAge');
const validateName = require('./validateName');
const validateRate = require('./validateRate');
const validateWatchedAt = require('./validateWatchdAt');

const validateTalker = (req, res, next) => {
  const { name, age, talk } = req.body;

  return validateName(name, res)
  || validateAge(age, res)
  || validateWatchedAt(talk, res)
  || validateRate(talk, res)
  || next();
};

module.exports = validateTalker;