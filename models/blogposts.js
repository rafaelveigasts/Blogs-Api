module.exports = (sequelize, DataTypes) => {
  const BlogPost = this.sequelize.define(
    'BlogPost',
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userID: { type: this.DataTypes.Integer, foreinKey: true },
    },
    {
      createdAt: 'published',
      updatedAt: 'updated',
      tableName: 'BlogPosts',
    },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userID', onDelete: 'CASCADE',
    });
  };
  return BlogPost;
};
