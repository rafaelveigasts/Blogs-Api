module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    tableName: 'Users',
  });
  return User;
};
/* 
Anotações a função create: faz uma busca no banco de dados pelo email que foi passado como parâmetro, se encontrar, retorna um objeto com o código 409, se não encontrar, cria um novo usuário.

O token é gerado com o jwt.sign, passando como parâmetro o objeto user, o secret e o jwtConfig.

fonte finders do sequelize https://sequelize.org/v7/manual/model-querying-finders.html
*/