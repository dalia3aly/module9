const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
};
// ... other controllers like getPost, updatePost, etc.

// Get All Posts
exports.getAllPosts = async (req, res) => {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(400).json(err);
    }
  };

// Get Post By Id

exports.getPost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(400).json(err);
    }
  };

// Update Post

exports.updatePost = async (req, res) => {
    try {
      const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json(updatedPost);
    } catch (err) {
      res.status(400).json(err);
    }
  };

// Delete Post

exports.deletePost = async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: 'success',
        data: null,
      });
    } catch (err) {
      res.status(400).json(err);
    }
  };

// Like Post

exports.likePost = async (req, res) => {
    const postId = req.params.id;
    const userId = req.body.userId;             
    const username = req.body.username;       

    try {
      const post = await Post.findById(postId);
  
      // check if the post has already been liked by this user
      const existingLike = post.likes.find(like => like.userId.toString() === userId);
  
      if (existingLike) {
        // Remove the like
        post.likes = post.likes.filter(like => like.userId.toString() !== userId);
      } else {
        // Add a new like
        post.likes.push({ userId, username });
      }

      await post.save();

    res.status(200).json({ message: 'Successfully updated likes', post });          //To see if for myself on Postman
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};


  // Add Comment

exports.addComment = async (req, res) => {
    try {
      await Post.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            comments: {
              userId: req.body.userId,
              text: req.body.text,
            },
          },
        },
        { new: true }
      );
      res.status(200).json('Comment has been added');
    } catch (err) {
      res.status(500).json(err);
    }
  };
