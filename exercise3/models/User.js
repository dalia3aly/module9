const { Sequelize, Model } = require('sequelize');
const db = require('./db');

class User extends Model {}

User.init({
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'User'
});

module.exports = User;
