const Like = require('../models/Like');


// Create a like

exports.createLike = async (req, res) => {
    try {
        // taking postId from req.params
        const postId = req.params.postId;

        // taking userId from req.body of the like creator
        const { userId } = req.body;
    
        if (!postId) return res.status(400).json({ error: 'Post is not found' });
    
        const like = await Like.create({
        postId,
        userId
        });
    
        res.status(201).json({ like, message: "You liked the post" });
    } catch (error) {
        res.status(400).json({ error: 'Failed to create like' });
    }
    };


    // Unlike a post

    exports.deleteLike = async (req, res) => {
        try {
            const likeId = req.params.likeId;
    
            const deleted = await Like.destroy({
                where: { id: likeId }
            });
    
            if (deleted) {
                return res.status(204).json({ message: "Successfully unliked the post" });
            }
    
            throw new Error("Like not found");
        } catch (error) {
            res.status(400).json({ error: "Failed to unlike" });
        }
    };


