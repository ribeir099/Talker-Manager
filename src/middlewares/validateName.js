const validateInput = require('./validateInput');

const validateName = (name, res) => {
  if (name === undefined) {
    return validateInput(name, res, 'name');
  }
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
};

module.exports = validateName;