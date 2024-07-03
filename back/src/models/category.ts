//définit le modèle de données en utilisant Sequelize
//ces modèles définissent la structure des tables de la base de données et les relations entre elles

const { DataTypes } = require("sequelize");
const sequelize = require("../database");
// Modèle User
const Category = sequelize.define("Category", {
  title: {
    type: DataTypes.STRING,
    allowNull: false, //la colonne ne peut pas être nulle
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Category;
