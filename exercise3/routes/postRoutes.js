const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.post('/post', postController.createPost);
router.get('/', postController.getPosts);
router.get('/:id', postController.getPostById);
router.put('/update/:id', postController.updatePost);
router.delete('delete/:id', postController.deletePost);

module.exports = router;