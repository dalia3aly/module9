const axios = require('axios');

exports.getUsers = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
