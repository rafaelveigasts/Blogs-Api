const { User } = require('../models');

const getEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
  });
  return user;
};

const createUser = async (userObj) => {
  const { displayName, email, password, image } = userObj;
  const userEmail = await getEmail(userObj.email);
  if (userEmail) {
    return { code: 409, message: { message: 'User already registered' } };
  }

  const user = await User.create({
    displayName,
    email,
    password,
    image,
  });
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    return {
      code: 404,
      message: { message: 'User does not exist' },
    };
  }
  return user;
};

module.exports = {
  createUser,
  getEmail,
  getAllUsers,
  getUserById,
};

/* 
Anotações a função create: faz uma busca no banco de dados pelo email que foi passado como parâmetro, se encontrar, retorna um objeto com o código 409, se não encontrar, cria um novo usuário.

O token é gerado com o jwt.sign, passando como parâmetro o objeto user, o secret e o jwtConfig.

fonte finders do sequelize https://sequelize.org/v7/manual/model-querying-finders.html
*/
