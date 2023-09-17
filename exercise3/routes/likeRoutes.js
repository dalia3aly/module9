const express = require('express');
const likeController = require('../controllers/likeController');
const router = express.Router();

router.post('/:postId', likeController.createLike);
router.delete('/:likeId', likeController.deleteLike);      //unlike


module.exports = router;