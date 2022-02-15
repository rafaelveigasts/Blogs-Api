module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: 'BlogPosts',
    // timestamps: false,
  });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'users' });
  };
  return BlogPost;
};

/* ver mais sobre datatypes.now em http://sequelize.org/master/manual/model-basics.html */