//définit les routes de l'API en utilisant Express Router

//express.Router est une classe dans le framework Node.js Express qui permet de créer des modules de routage modulaires 
//dans une application Express

const express = require('express');
const router = express.Router();
const guideController = require('../controllers/guideController.ts');

// Route pour récupérer tous les guides
router.get('/', guideController.getAllGuides);

// Route pour récupérer un guide par ID
router.get('/:id', guideController.getGuideById);

// Route pour créer un nouveau guide
router.post('/', guideController.createGuide);

// Route pour mettre à jour un guide
router.put('/:id', guideController.updateGuide);

// Route pour supprimer un guide
router.delete('/:id', guideController.deleteGuide);

module.exports = router;