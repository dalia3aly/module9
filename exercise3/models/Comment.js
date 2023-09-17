const { Sequelize, Model } = require('sequelize');
const db = require('./db');

class Comment extends Model {}

Comment.init({
  content: Sequelize.TEXT,
  userId: Sequelize.INTEGER,
  postId: Sequelize.INTEGER
}, {
  sequelize: db,
  modelName: 'Comment'
});

module.exports = Comment;
