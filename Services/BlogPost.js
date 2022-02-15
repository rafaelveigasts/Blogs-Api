const { BlogPost, PostCategorie, Categorie } = require('../models');

const categorieExists = (array) => {
  const result = array.reduce(async (acc, item) => {
    const categorie = await Categorie.findbyPk(item);

    if (!categorie) {
      return {
        code: 400,
        message: { message: '"categoryIds" not found' },
      };
    }
    return acc;
  }, false);
  return result;
};

const insertPost = async (title, content, userId) => {
  const post = await BlogPost.create({
    title,
    content,
    userId,
  });
  return post;
};

module.exports = {
  categorieExists,
};