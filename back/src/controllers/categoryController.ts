//définit les contrôleurs qui contiennent la logique métier pour manipuler les données correspondantes en utilisant 
//les modèles Sequelize

const { Category } = require('../models/category');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des catégories' });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Catégorie non trouvée' });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de la catégorie' });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Category.create({ name });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de la catégorie' });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Catégorie non trouvée' });
    }
    await category.update({ name });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de la catégorie' });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Catégorie non trouvée' });
    }
    await category.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de la catégorie' });
  }
};