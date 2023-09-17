const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3000;

app.use('/api', userRoutes);

app.get('/', (req, res) => res.send('Hello, World!'));

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});