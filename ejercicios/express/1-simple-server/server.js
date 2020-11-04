// Servidor que escucha en localhost:3000 y responde el JSON
// { mensaje: 'Hola mundo!' } cuando se le envía una petición
// GET a /hola

const express = require('express');
const app = express();
const port = 3000;


app.use((req, res, next) => {
    console.log('escuchando');
    next();
});

app.get('/hola', (req, res) => {
    res.send({ mensaje: 'hola mundo' });
});

app.listen(port, () => console.log('servidor corriendo'));