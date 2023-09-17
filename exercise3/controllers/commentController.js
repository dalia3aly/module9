const Comment = require("../models/Comment");

//create comment

exports.createComment = async (req, res) => {
    try {
        const { userId, postId, content } = req.body;
    
        if (!userId) return res.status(400).json({ error: "User ID must be provided" });
        if (!postId) return res.status(400).json({ error: "Post ID must be provided" });
    
        const comment = await Comment.create({
        userId,
        postId,
        content,
        });
    
        res.status(201).json({ comment });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: "Failed to create comment" });
    }
    }

//get all comments

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json({ comments });
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch comments" });
  }
};

//get comment by id

exports.getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) return res.status(404).json({ error: "Comment not found" });
    res.status(200).json({ comment });
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch comment" });
  }
};

//update comment

exports.updateComment = async (req, res) => {
    try {
      const { commentId, userId, content } = req.body;
  
      // Validate incoming data
      if (!commentId || !userId || !content) {
        return res.status(400).json({ error: 'All fields must be provided' });
      }
  
      // Fetch the comment to be updated
      const commentToUpdate = await Comment.findOne({
        where: { id: commentId, userId: userId }
      });
  
      // Check if the comment exists and belongs to the user
      if (!commentToUpdate) {
        return res.status(404).json({ error: 'Comment not found or not belonging to user' });
      }
  
      // Update the comment
      commentToUpdate.content = content;
      await commentToUpdate.save();
  
      res.status(200).json({ message: 'Comment updated successfully', updatedComment: commentToUpdate });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update comment' });
    }
  };

//delete comment

exports.deleteComment = async (req, res) => {
  try {
    const deleted = await Comment.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
        return res.status(200).json({ message: "Comment deleted successfully" });
      }

    throw new Error("Comment not found");
  } catch (error) {
    res.status(400).json({ error: "Failed to delete comment" });
  }
};
