const ServiceCategorie = require('../Services/Categorie');

const createCategorie = async (req, res) => {
  try {
    const { name } = req.body;
    const categorie = await ServiceCategorie.createCategorie(name);
    return res.status(201).json(categorie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await ServiceCategorie.getAllCategories();
    console.log('controller', categories);
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCategorie,
  getAllCategories,
};

/*  aqui retiramos o name do body e aplicamos a criação de categoria passando o name fornecido
caso tenha sucesso volta o 201 com a categoria
se não tiver volta erro 

para as categorias, usamos o findAll que retorna todas as categorias cadastradas no banco de dados
*/