const validateInput = (descriptionValue, res, value) => {
  if (!descriptionValue) {
    return res.status(400).json(
      { message: `O campo "${value}" é obrigatório` },
    );
  }
};

module.exports = validateInput;