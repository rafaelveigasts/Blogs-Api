const jwt = require('jsonwebtoken');
require('dotenv').config();

const key = process.env.JWT_SECRET;
const ServiceUser = require('../Services/User');

const createUser = async (req, res) => {
  try {
    const { displayName, email } = req.body;
    const user = await ServiceUser.createUser(req.body);
    console.log('controller', user);
    if (user.message) return res.status(user.code).json(user.message);
    const token = jwt.sign({ userName: displayName, email }, key);
    console.log('token', token);
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await ServiceUser.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await ServiceUser.getUserById(id);
    if (user.message) return res.status(user.code).json(user.message);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
