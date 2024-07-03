const User = require('./user.ts');
const Guide = require('./guide.ts');
const Category = require('./category.ts');
const Image = require('./image.ts');
const Audio = require('./audio.ts');
const Video = require('./video.ts');
const Comment = require('./comment.ts');
const Guide_Category = require('./guide_category.ts');

//MANY TO MANY
//Une catégorie appartient à un ou plusieurs guides
Category.belongsToMany(Guide, { through: 'guide_category', as: 'guides' });

//Un guide appartient à un ou plusieurs catégories
Guide.belongsToMany(Category, { through: 'guide_category', as: 'categories' });

//ONE TO MANY
//Une image appartient à un guide
Image.belongsTo(Guide);

//Un guide a une ou plusieurs images
Guide.hasMany(Image);

//Un audio appartient à un guide
Audio.belongsTo(Guide);

//Un guide a un ou plusieurs audios
Guide.hasMany(Audio);

//Une video appartient à un guide
Video.belongsTo(Guide);

//Un guide a une ou plusieurs videos
Guide.hasMany(Video);

//Un commentaire appartient à un guide
Comment.belongsTo(Guide);

//Un guide a un ou plusieurs commentaires
Guide.hasMany(Comment);

//Un commentaire appartient à un utilisateur
Comment.belongsTo(User);

//Un utilisateur a une ou plusieurs videos
User.hasMany(Comment);

module.exports = {
  User,
  Guide,
  Category,
  Image,
  Audio,
  Video,
  Comment,
  Guide_Category
};
