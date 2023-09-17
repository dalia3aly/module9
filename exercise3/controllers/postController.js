const Post = require('../models/Post');


//create post

exports.createPost = async (req, res) => {
    try {
      const { userId, title, content, image } = req.body;
  
      if (!userId) return res.status(400).json({ error: 'User ID must be provided' });
  
      const post = await Post.create({
        userId,
        title,
        content,
        image
      });
  
      res.status(201).json({ post });
    } catch (error) {
      res.status(400).json({ error: 'Failed to create post' });
    }
  };


//get all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json({ posts });
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch posts' });
  }
};

//get post by id

exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.status(200).json({ post });
    } catch (error) {
        res.status(400).json({ error: 'Failed to fetch post' });
    }
    }

//update post
exports.updatePost = async (req, res) => {
    try {
      const postId = req.params.postId;
      if (!postId) return res.status(400).json({ error: 'Post ID must be provided' });
      
      const updates = req.body;
      await Post.update(updates, { where: { id: postId } });
      res.status(200).json({ message: 'Post updated successfully.' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to update post' });
    }
  };


//delete post

exports.deletePost = async (req, res) => {
    try {
        const deleted = await Post.destroy({
            where: { id: req.params.id },
        });

        if (deleted) {
            return res.status(204).send('Post deleted');
        }

        throw new Error('Post not found');
    } catch (error) {
        res.status(400).json({ error: 'Failed to delete post' });
    }
};