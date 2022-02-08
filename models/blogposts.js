module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    { title: DataTypes.STRING,
      content: DataTypes.STRING,
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    },
    { createdAt: 'published', updatedAt: 'updated', tableName: 'BlogPosts',
    },
);
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return BlogPost;
};
