const { Sequelize, Model } = require('sequelize');
const db = require('./db');

class Post extends Model {}

Post.init({
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
  image: Sequelize.STRING,
  userId: Sequelize.INTEGER
}, {
  sequelize: db,
  modelName: 'Post'
});

module.exports = Post;
