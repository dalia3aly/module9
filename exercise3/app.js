const express = require('express');
const db = require('./models/db');

require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');

require('./setup');

const app = express();

app.use(express.json());

app.use('/user', userRoutes);
app.use ('/post', postRoutes);
app.use('/comment', commentRoutes);
app.use('/like', likeRoutes);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

module.exports = app;