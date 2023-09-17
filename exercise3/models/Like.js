const { Sequelize, Model } = require('sequelize');
const db = require('./db');

class Like extends Model {}

Like.init({
  userId: Sequelize.INTEGER,
  postId: Sequelize.INTEGER
}, {
  sequelize: db,
  modelName: 'Like'
});

module.exports = Like;
