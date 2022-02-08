module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  { 
    timestamps: false,
    tableName: 'Users',
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, { 
      foreignKey: 'userId', as: 'blogposts',
    });
  };

  return User;
};

/*
Anotações: quando rodamos o npx sequelize model:generate --name User, o sequelize cria um arquivo chamado User.js
essa é a nossa tabela. No migrations nós editamos os campos da nossa tabela.

Então até aqui nós estamos exportando uma função que recebe dois parâmetros, o sequelize e o DataTypes.
que retorna um objeto contendo a tabela user, com as colunas id, displayName, email, password e image.

qdo quisermos efetuar qualquer tipo de alteração na tabela, nós alteramos o model e efetuamos o migration para ter a tabela versionada.

aqui nós declaramos as colunas da tabela, que são: displayName, email, password e image.
Não declaramos o id pois a tabela em si não tem id, os campo que vão dentro dela sim, por isso nós declaramos o id no migrations..
*/