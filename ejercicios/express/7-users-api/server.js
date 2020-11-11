//servidor que escucha al localhost:3000 y tiene dos rutas
// /GET /users/:name -> devuelve el usuario con nombre === name
// /GET /users -> devuelve todos los users si no se manda querystring
// /GET /users -> si nos llega el queryString edad, 
// devolvemos los users que tengan esa edad.

// 2.1 Añade un nuevo endpoint que acepte peticiones POST 
// en /users con un body { nombre: $nombre, edad: $edad }
// y añada la info entrante a nuestro users.json y nos
// devuelva el usuario creado con un status code 201 CREATED.

// 2.2 Usa Joi para verificar que las request entrantes
// tienen el formato correcto.

// 2.3 Crea un nuevo endpoint que acepte peticiones POST
// a /users/:name donde :name hace referencia a uno de los
// usuarios que tenemos en users.json y cuyo body tenga
// content-type multipart/form-data y contenga una imagen.
// Si el usuario existe, guardaremos la imagen en /images,
// y devolvemos 201 CREATED, con el objeto
// { resultado: 'OK', imagen: $nombreDelArchivoSubido }
// Si no existe, devolveremos un error 404 Not Found.



// [].find(item => true)
// [].filter(item => true)


const express = require('express');
const fs = require('fs').promises
const joi = require('joi');
const bodyParser = require('body-parser')
const path = require('path');
const { valid } = require('joi');
const app = express();
const fileUpload = require('express-fileupload');
const { send } = require('process');


app.get('/users/:name', (req, res) => {
    const usersData = require('./users.json');
    const user = usersData.usuarios.find(user => user.nombre === req.params.name);

    res.send(user);
});

app.get('/users', (req, res) => {
    const usersData = require('./users.json');
    const { edad } = req.query;

    if (edad) {
        const usersEncontrados = usersData.usuarios.filter(user => user.edad === Number(edad));
        res.send(usersEncontrados);
    } else {
        res.send(usersData);
    }
});

app.use(bodyParser.json())
app.use(fileUpload())

app.post('/users', async (req, res) => {

    const usersData = require('./users.json');
    usersData.usuarios.push(req.body);

    res.send(usersData)
    const schema = joi.object({
        nombre: joi.string().required(),
        edad: joi.number().min(18).required()
    });

    const validation = schema.validate(req.body)

    if (validation.error) {
        res.status(400)
        res.send({ error: validation.er })
    } else {
        fs.writeFile(path.join(__dirname, './users.json'), JSON.stringify(usersData));

        res.status = 201
    }
});


app.post('/users/:name', async (req, res) => {

    const { name } = req.params; //DESTRUCTURING
    const schema = joi.string();
    const validation = schema.validate(name)

    if (validation.error) {
        res.estatus(400)
        res - send({ error: validation.error })
    } else {
        const userData = require('./users.json');
        const user = userData.usuarios.find(user => user.nombre === name);
        if (!user) {
            res.status(404)
            res.send({ error: 'Not found' })
        } else {
            const { file } = req.files;
            await fs.writeFile(path.join(__dirname, '/images', file.name), file.data)

            res.status(201);

            res.send({
                resultado: 'OK',
                imagen: file.name,
            })
        }
    }


})



app.listen(3000, () => console.log('Estoy escuchando'));