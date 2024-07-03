"use strict";
//définit le modèle de données en utilisant Sequelize
//ces modèles définissent la structure des tables de la base de données et les relations entre elles
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require("sequelize");
const sequelize = require("../database");
// Modèle User
const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false, //la colonne ne peut pas être nulle
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
module.exports = User;
