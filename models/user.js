module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      displayName: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Users',
    },
  );

  return User;
};

/*
Anotações: quando rodamos o npx sequelize model:generate --name User, o sequelize cria um arquivo chamado User.js
essa é a nossa tabela. No migrations nós editamos os campos da nossa tabela.

Então até aqui nós estamos exportando uma função que recebe dois parâmetros, o sequelize e o DataTypes.
que retorna um objeto contendo a tabela user, com as colunas id, displayName, email, password e image.

qdo quisermos efetuar qualquer tipo de alteração na tabela, nós alteramos o model e efetuamos o migration para ter a tabela versionada.

*/