const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  username: {
    type: String,
    required: true
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  }
},

{ collection: 'Comments' },
{
  timestamps: true          // this will add createdAt and updatedAt fields, hope they don't break anything
});

module.exports = mongoose.model('Comment', CommentSchema), 'Comments';
