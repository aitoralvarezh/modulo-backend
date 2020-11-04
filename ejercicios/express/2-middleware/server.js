// Servidor que escucha en localhost:3000 y responde el JSON
// { mensaje: 'Hola mundo!' } cuando se le envía una petición
// GET a /hola, y responde el texto 'Hola Express' cuando se le
// envía una petición GET a /express
// Además, para cualquier petición, muestra por pantalla la url
// usando un middleware.

const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(req.url);
    next();
})

app.get('/express', (req, res, ) => {
    res.send({ mensaje: 'hola mundo' })
    
})

app.get('/hola', (req, res) => {
    res.send('hola express')
    console.log('soy el segundo middleware');
})

app.listen(port, () => {
    console.log('servidor corriendo')
})