require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const User = require('../models/user');

const create = async ({ displayName, email, password, image }) => {
  const userIsRegistred = await User.findOne({ where: { email } });
  if (userIsRegistred) {
    return {
      code: 409, message: 'User already registred' };
  }
  const user = await User.create({ displayName, email, password, image });
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'RS256',
  };
  const token = jwt.sign(
    {
      data: user,
    },
    secret,
    jwtConfig,
  );
  return token;
};

module.exports = {
  create,
};
