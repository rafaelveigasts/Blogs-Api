const { BlogPost, PostCategorie, Categorie } = require('../models');

const categorieExists = (array) => {
  const result = array.reduce(async (acc, item) => {
    const categorie = await Categorie.findByPk(item);

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

const insertPostCategorie = (arrayCategories, postId) => {
  Promise.all(arrayCategories.map(async (item) => {
      await PostCategorie.create({
        postId,
        categorieId: item,
      });
    }));
};

const createPost = async (objPost, userId) => {
  const { title, content, categoryIds } = objPost;
  const verifyCategory = await categorieExists(categoryIds);
  if (verifyCategory.message) return verifyCategory;
  const post = await insertPost(title, content, userId);
  await insertPostCategorie(categoryIds, post.id);
  return {
    id: post.id,
    userId,
    title,
    content,
  };
};

module.exports = {
  createPost,
};
