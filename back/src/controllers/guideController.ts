////définit les contrôleurs qui contiennent la logique métier pour manipuler les données correspondantes en utilisant 
//les modèles Sequelize

const { Guide } = require('../models/guide');

exports.getAllGuides = async (req, res) => {
  try {
    const guides = await Guide.findAll();
    res.status(200).json(guides);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des guides' });
  }
};

exports.getGuideById = async (req, res) => {
  try {
    const guide = await Guide.findByPk(req.params.id);
    if (!guide) {
      return res.status(404).json({ error: 'Guide non trouvé' });
    }
    res.status(200).json(guide);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du guide' });
  }
};

exports.createGuide = async (req, res) => {
  try {
    const { name, description, price, categoryId } = req.body;
    const guide = await Guide.create({ name, description, price });
    res.status(201).json(guide);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du guide' });
  }
};

exports.updateGuide = async (req, res) => {
  try {
    const { name, description, price, categoryId } = req.body;
    const guide = await Guide.findByPk(req.params.id);
    if (!guide) {
      return res.status(404).json({ error: 'guide non trouvé' });
    }
    await guide.update({ name, description, price });
    res.status(200).json(guide);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour du guide' });
  }
};

exports.deleteGuide = async (req, res) => {
  try {
    const guide = await Guide.findByPk(req.params.id);
    if (!guide) {
      return res.status(404).json({ error: 'Guide non trouvé' });
    }
    await guide.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du guide' });
  }
};