const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router();

router.post('/comment', commentController.createComment);
router.get('/', commentController.getComments);
router.get('/:id', commentController.getCommentById);
router.put('/update', commentController.updateComment);
router.delete('/delete/:id', commentController.deleteComment);


module.exports = router;