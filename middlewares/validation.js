const isNameValid = (req, res, next) => {
  const { body } = req;

  if (!body.Displayname) {
    return res.status(400).json({ message: '"Displayname" is required' });
  }

  const { name } = body;

  if (name.length < 8) {
    return res
      .status(400)
      .json({ message: '"Displayname" must be at least 8 characters long' });
  }

  next();
};

const isEmailValid = (req, res, next) => {
  const { body } = req;

  if (!body.Email) {
    return res.status(400).json({ message: '"Email" is required' });
  }

  const { email } = body;

  if (!email.includes('@')) {
    return res.status(400).json({ message: '"Email" is invalid' });
  }

  next();
};

const isPasswordValid = (req, res, next) => {
  const { body } = req;

  if (!body.Password) {
    return res.status(400).json({ message: '"Password" is required' });
  }

  const { password } = body;

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: '"Password" must be at least 8 characters long' });
  }

  if (password === '') {
    return res.status(400).json({ message: '"password" is required' });
  }

  next();
};

module.exports = {
  isNameValid,
  isEmailValid,
  isPasswordValid,
};
