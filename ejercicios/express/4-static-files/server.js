// Servidor que escucha en localhost:3000 y responde con el
// contenido del archivo data.json cuando se hace una petición
// GET pidiendo el archivo /data.json

const express = require('express');

const app = express();

const path = require('path');


const port = 3000;

const staticFiles = path.resolve(__dirname, 'static');

app.use(express.static(staticFiles))



app.listen(port, ()=> console.log(`escuchando en ${port}`))