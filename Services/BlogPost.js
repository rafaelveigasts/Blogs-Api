const { BlogPost, PostsCategorie, Categorie } = require('../models');

const categorieExists = (array) => {
  const result = array.reduce(async (ac, cur) => {
    const categorie = await Categorie.findByPk(cur);
    if (!categorie) {
     return { code: 400, 
       message: { message: '"categoryIds" not found' } };
    }
    return ac;
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
      await PostsCategorie.create({
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
  console.log('service', post);
  insertPostCategorie(categoryIds, post.id);
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
