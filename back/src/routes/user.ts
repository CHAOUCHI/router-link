//définit les routes de l'API en utilisant Express Router

//express.Router est une classe dans le framework Node.js Express qui permet de créer des modules de routage modulaires
//dans une application Express

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.ts');

// Route pour créer un nouvel utilisateur
router.post('/signup', userController.createUser);

// Route pour se connecter en tant qu'utilisateur
router.post('/login', userController.loginUser);

// Route pour récupérer tous les utilisateurs
router.get('/users', userController.getAllUsers);

// Route pour récupérer un utilisateur par son ID
router.get('/users/:id', userController.getUserById);

// Route pour mettre à jour un utilisateur par son ID
router.put('/users/:id', userController.updateUser);

// Route pour supprimer un utilisateur par son ID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;