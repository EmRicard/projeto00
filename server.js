const express = require('express');
const app = express();
const port = 3000;

const oiController = require('./src/controllers/oiController');
const UserController = require('./src/controllers/userController');

app.use(express.json());

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


app.listen(port, () => {
  console.log(`A API está rodando em http://localhost:${port}`);
});
