// Servidor que escucha en localhost:3000 y tiene un endpoint
// GET /users/:userId/photos/:id
// Este endpoint devuelve un objeto en la respuesta con la forma
// { user: $userId, photo: $id }


const express = require('express');
const app = express();
const port = 3000


app.get('/users/:userId/photos/:id', (req, res) => {
    res.send({
        user: req.params.userId,
        photo: req.params.id,
    });
    res.send(data)
});

app.listen(port, () => console.log(`escuchando en el ${port}`));