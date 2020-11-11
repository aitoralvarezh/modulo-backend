const express = require('express');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv').config();

// requerimos los controllers
const { booksController, usersController } = require('./controllers');

const app = express();

app.use(bodyParser.json());

// Configuración de las rutas
app.get('/users', usersController.getUsers);
app.get('/users/:id', usersController.getUserById );

app.get('/books', booksController.getBooks)

app.listen(3000);