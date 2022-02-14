const { Categorie } = require('../models');

const createCategorie = async (name) => {
  const categorie = await Categorie.create({
    name,
  });
  return categorie;
};

module.exports = {
  createCategorie,
};

/* 
aqui criamos a categoria que recebemos do controller com o name do body e cadastramos no banco de dados
*/