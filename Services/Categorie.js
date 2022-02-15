const { Categorie } = require('../models');

const createCategorie = async (name) => {
  const categorie = await Categorie.create({
    name,
  });
  return categorie;
};

const getAllCategories = async () => {
  const categories = await Categorie.findAll();
  console.log('service', categories);
  return categories;
};

module.exports = {
  createCategorie,
  getAllCategories,
};

/* 
aqui criamos a categoria que recebemos do controller com o name do body e cadastramos no banco de dados
getAllCategories retorna todas as categorias cadastradas no banco de dados
*/