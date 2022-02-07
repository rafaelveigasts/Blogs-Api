module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  { 
    createdAt: 'published',
    updatedAt: 'updated',
    tableName: 'BlogPosts',
  });

  return BlogPost;
};