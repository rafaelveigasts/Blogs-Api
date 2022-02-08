const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/user');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decode = jwt.verify(authorization, secret);
    const user = await User.findOne({
      where: { email: decode.data.email },
    });

    if (!user) {
      return res.status(409).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
