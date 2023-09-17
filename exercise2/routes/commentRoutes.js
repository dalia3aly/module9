const express = require('express');
const { createComment, getComments } = require('../controllers/commentController');

const router = express.Router();

router.post('/create', createComment);
router.get('/:postId', getComments);

module.exports = router;
