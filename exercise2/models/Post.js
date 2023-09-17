const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String, 
  image: {
    type: String
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  likes: [{                               //are you gonna work this time?
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    username: String
  }],
  
  comments: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    username: String,
    content: String,
  }],
});

module.exports = mongoose.model('Post', postSchema, 'Posts');
