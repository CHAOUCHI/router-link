//définit le modèle de données en utilisant Sequelize
//ces modèles définissent la structure des tables de la base de données et les relations entre elles

const { DataTypes } = require("sequelize");
const sequelize = require("../database");
// Modèle User
const Guide = sequelize.define("Guide", {
  name: {
    type: DataTypes.STRING,
    allowNull: false, //la colonne ne peut pas être nulle
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Guide;
