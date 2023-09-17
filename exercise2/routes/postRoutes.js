const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

// Create a new post
router.post('/create', postController.createPost);

// Get all posts
router.get('/', postController.getAllPosts);

// Get a single post by ID
router.get('/:id', postController.getPost);

// Update a post by ID
router.patch('/:id', postController.updatePost);

// Delete a post by ID
router.delete('/:id', postController.deletePost);

// Like or unlike a post
router.post('/:id/like', postController.likePost);

// Add a comment to a post
router.post('/:id/comment', postController.addComment);

module.exports = router;
