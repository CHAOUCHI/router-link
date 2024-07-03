"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize, DataTypes } = require("sequelize");
const login = {
    database: "router-link",
    username: "",
    password: "",
};
// Connexion à la BDD
const sequelize = new Sequelize(login.database, login.username, login.password, {
    host: "localhost",
    dialect: "mysql",
});
// Vérifier la connexion
sequelize
    .authenticate()
    .then(() => console.log("Connexion à la base de donnée router-link"))
    .catch((error) => console.log(error));
// Application des changements à MySQL
sequelize.sync({ force: true })
    .then(() => console.log("Les modèles et les tables sont synchronisés."));
// J'exporte aussi sequelize au cas où pour plus tard
module.exports.sequelize = sequelize;
