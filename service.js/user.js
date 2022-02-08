require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const User = require('../models/user');

const create = async ({ displayName, email, password, image }) => {
  const userIsRegistred = await User.findOne({ where: { email } });
  if (userIsRegistred) {
    return {
      code: 409, message: { message: 'User already registred' } };
  }
  const user = await User.create({ displayName, email, password, image });
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
};

module.exports = {
  create,
};

/* 
Anotações a função create: faz uma busca no banco de dados pelo email que foi passado como parâmetro, se encontrar, retorna um objeto com o código 409, se não encontrar, cria um novo usuário.

O token é gerado com o jwt.sign, passando como parâmetro o objeto user, o secret e o jwtConfig.

fonte finders do sequelize https://sequelize.org/v7/manual/model-querying-finders.html
*/