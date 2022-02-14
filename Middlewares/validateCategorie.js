const validateCategorie = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
   next();
};

module.exports = validateCategorie;

/* fazemos essa validação para não criar uma categoria sem nome */