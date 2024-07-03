//définit les contrôleurs qui contiennent la logique métier pour manipuler les données correspondantes en utilisant 
//les modèles Sequelize

// Importer les dépendances nécessaires
const { User } = require('../models/user');

// Fonction pour récupérer tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
};

// Fonction pour récupérer un utilisateur par son ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
  }
};

// Fonction pour créer un nouvel utilisateur
exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    res.status(201).json(user);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: 'Email déjà utilisé' });
    }
    res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
  }
};


// Fonction pour mettre à jour un utilisateur
exports.updateUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    await user.update({ username, email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'utilisateur' });
  }
};

// Fonction pour supprimer un utilisateur
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    await user.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur' });
  }
};

// Fonction pour se connecter
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    if (user.password !== password) {
      return res.status(401).json({ error: 'Mot de passe incorrect' });
    }
    res.status(200).json({ message: 'Connexion réussie' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la connexion' });
  }
};