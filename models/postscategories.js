module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories',
  {}, 
  { timestamps: false });

  PostsCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.categories, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostsCategories,
      as: 'categories',
    });

    models.Categories.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostsCategories,
      as: 'posts',
    });
  };
  return PostsCategories;
};