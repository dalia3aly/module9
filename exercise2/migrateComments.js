require("dotenv").config();
const mongoose = require("mongoose");
const Post = require("./models/Post"); // Adjust the path as necessary

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const existingComments = [
    {
      _id: "someId1",
      content: "some content",
      userId: "someUserId1",
      username: "someUsername",
      postId: "somePostId1",
    },
    // ... more comments
  ];
  
  // Iterate through the existing comments to embed them into the corresponding posts
  existingComments.forEach(async (comment) => {
    try {
      await Post.findByIdAndUpdate(
        comment.postId,
        {
          $push: { comments: comment },
        },
        { new: true }
      );
      console.log(`Comment ${comment._id} migrated.`);
    } catch (err) {
      console.log(`Failed to migrate comment ${comment._id}: ${err}`);
    }

    mongoose.disconnect();

    migrateComments().then(() => {
        mongoose.disconnect();
        }
    );
    });



