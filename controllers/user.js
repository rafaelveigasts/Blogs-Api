const service = require('../service.js/user');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await service.create({ displayName, email, password, image });

    if (token.message) return res.status(token.code).json(token.message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
};
