const validateInput = require('./validateInput');

const validateAge = (age, res) => {
  if (age === undefined) {
    return validateInput(age, res, 'age');
  }

  if (typeof (age) !== 'number' || !Number.isInteger(Number(age)) || Number(age) < 18) {
    return res.status(400)
      .json({ message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' });
  }
};

module.exports = validateAge;