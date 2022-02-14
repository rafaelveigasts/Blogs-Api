const express = require('express');
const UserController = require('./Controllers/User');
const LoginController = require('./Controllers/Login');
const CategorieController = require('./Controllers/Categorie');

const { validateCategorie } = require('./Middlewares/validateCategorie');
const { checkToken } = require('./Middlewares/tokenValidation');

const {
  checkFieldExists,
  validateFields,
} = require('./Middlewares/validateUser');

const { checkLogin } = require('./Middlewares/validateLogin');

const app = express();
app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', checkFieldExists, validateFields, UserController.createUser);
app.post('/categories', checkToken, validateCategorie, CategorieController.createCategorie);
app.post('/login', checkLogin, LoginController.executeLogin);

app.get('/user', checkToken, UserController.getAllUsers);
app.get('/categories', checkToken, CategorieController.getAllCategories);
app.get('/user/:id', checkToken, UserController.getUserById);