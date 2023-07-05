const validateInput = require('./validateInput');

const validateRate = (talk, res) => {
  const { rate } = talk;

  if (rate === undefined) {
    return validateInput(talk.rate, res, 'rate');
  }

  if (!Number.isInteger(rate) || !(rate > 0 && rate <= 5)) {
    return res.status(400)
      .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
  }
};

module.exports = validateRate;