module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories',
  {}, 
  { timestamps: false });

  return PostsCategories;
};