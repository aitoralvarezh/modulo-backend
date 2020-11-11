const express = require('express');
const bodyParser = require('body-parser');

// requerimos los controllers

const app = express();

app.use(bodyParser.json());

// Configuración de las rutas

app.listen(3000);