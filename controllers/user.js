const service = require('../service/user');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await service.create({ displayName, email, password, image });

    console.log('token controller', token);
    if (token.message) return res.status(token.code).json(token.message);
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
};