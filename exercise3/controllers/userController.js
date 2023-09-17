const User = require("../models/User");


//get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch users" });
  }
};

//get user by id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch user" });
  }
};


//create user
exports.createUser = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const user = await User.create(req.body);
    res.status(201).json({ user });

  } catch (error) {
    console.log("Error:", error.message)
    res.status(400).json({ error: "Failed to create user" });
  }
};


//update user
exports.updateUser = async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      return res.status(200).json({ user: updatedUser });
    }

    throw new Error("User not found");
  } catch (error) {
    res.status(400).json({ error: "Failed to update user" });
  }
};


//delete user
exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      return res.status(204).json({ message: "User deleted", deleted });
    }

    throw new Error("User not found");
  } catch (error) {
    res.status(400).json({ error: "Failed to delete user" });
  }
};
