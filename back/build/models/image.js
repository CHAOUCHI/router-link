"use strict";
//définit le modèle de données en utilisant Sequelize
//ces modèles définissent la structure des tables de la base de données et les relations entre elles
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require("sequelize");
const sequelize = require("../database");
// Modèle User
const Image = sequelize.define("Image", {
    path: {
        type: DataTypes.STRING,
        allowNull: false, //la colonne ne peut pas être nulle
    },
});
module.exports = Image;
