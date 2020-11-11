// Servidor que escucha en localhost:3000 y responde el JSON
// { mensaje: 'Hola mundo!' } cuando se le envía una petición
// GET a /hola, y responde el texto 'Hola Express' cuando se le
// envía una petición GET a /express
// Además, para cualquier petición, muestra por pantalla la url
// usando un middleware.

// (Lo mismo que en el ejemplo 2, pero usando un logger como morgan)

const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan())
app.get('/hola', (req,res)=> {
    res.send ({mensaje: 'hola mundo'})
});
app.get('/express', (req,res)=> {
    res.send('Hola express')
})

app.listen(3000, ()=>console.log('escuchando'))