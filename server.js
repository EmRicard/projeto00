const express = require('express');
const app = express();
const port = 3000;

const oiController = require('./src/controllers/oiController');
const UserController = require('./src/controllers/userController');
const ProdutoController = require('./src/controllers/produtoController');

app.use(express.json());

//Produtos

app.post('/produtos', (req, res) => {
  ProdutoController.save(req, res);
});

app.get('/produtos', (req, res) => {
  ProdutoController.findAll(req, res);
});

app.get('/produtos/:id', (req, res) => {
  ProdutoController.findById(req, res);
});

app.put('/produtos/:id', (req, res) => {
  ProdutoController.update(req, res);
});

app.delete('/produtos/:id', (req, res) => {
  ProdutoController.delete(req, res);
});

//////////////////////////////////////////////////////////////////////

app.get('/oi', oiController.sayOi);

app.post('/users', (req, res) => {
  UserController.createUser(req, res);
});

app.get('/users', (req, res) => {
  UserController.findAllUsers(req, res);
});

app.get('/users/:id', (req, res) => {
  UserController.getUserById(req, res);
});

app.put('/users/:id', (req, res) => {
  UserController.updateUser(req, res);
});

app.delete('/users/:id', (req, res) => {
  UserController.deleteUser(req, res);
});


app.listen(port, () => {
  console.log(`A API está rodando em http://localhost:${port}`);
});
