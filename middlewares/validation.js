const isNameValid = (req, res, next) => {
  const { displayName } = req.body;

  if (!displayName) {
    return res.status(400).json({ message: '"displayName" is required' });
  }
  if (displayName.length < 8) {
    return res
      .status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const isEmailValid = (req, res, next) => {
  const { email } = req.body;

  if (!email || email === '') {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (!email.includes('@')) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

const isPasswordValid = (req, res, next) => {
  const { password } = req.body;

  if (!password || password === '') {
    return res.status(400).json({ message: '"Password" is required' });
  }
  if (password.length !== 6) {
    return res
      .status(400)
      .json({ message: '"Password" length must be 6 characters long' });
  }

  next();
};

module.exports = {
  isNameValid,
  isEmailValid,
  isPasswordValid,
};
