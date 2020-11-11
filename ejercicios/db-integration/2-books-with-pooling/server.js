const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const usersController = require('./controllers/users-controller');
const booksController = require('./controllers/books-controller');


// requerimos los controllers

const app = express();

app.use(bodyParser.json());

// Configuración de las rutas

app.get('/users', usersController.getUsers);
app.get('/users/:id', usersController.getUserById );

app.get('/books', booksController.getBooks);
app.post('/books', booksController.addBook);
app.put('/books/:id', booksController.updateBook);
app.patch('/books/:id', booksController.modifyBook)

app.listen(3000);