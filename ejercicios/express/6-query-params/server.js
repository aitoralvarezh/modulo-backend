// Servidor que escucha en localhost:3000 y tiene un endpoint
// GET /users que acepta name y email como query params.
// Este endpoint devuelve un objeto en la respuesta con la forma
// { name: $name, email: $email } si se envían estos parámetros
// en la request. Si no, responde con los parámetros que se hayan
// enviado.


const express = require('express');

const app = express();

const port = 3000;

app.get('/users', (req, res) => {
    const data = {
        user: req.query.name,
        email: req.query.email,
    }
    res.send(data);
})

//http://localhost:3000/users?name=pepito&email=hola@croqueta.com

//PROBAR EN ESTA URL, ES LA FORMAM CORRECTA DE LLAMAR A LOS QUERYS

app.listen(port, ()=> console.log(`escuchando en el puerto ${port}`))