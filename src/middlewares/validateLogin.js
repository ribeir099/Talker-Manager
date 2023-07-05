const validateEmail = require('./validateEmail');
const validateInput = require('./validateInput');
const validatePassword = require('./validatePassword');

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  return validateInput(email, res, 'email')
    || validateInput(password, res, 'password')
    || validateEmail(email, res)
    || validatePassword(password, res)
    || next();
};

module.exports = validateLogin;