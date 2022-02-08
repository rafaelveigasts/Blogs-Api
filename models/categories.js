module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    tableName: 'categories',
  });
  return Categories;
};