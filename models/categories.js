module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    tableName: 'Categories',
  });
  return Categorie;
};