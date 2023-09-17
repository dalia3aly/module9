const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

Comment.belongsTo(User, { foreignKey: 'userId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

Post.belongsTo(User, { foreignKey: 'userId' });