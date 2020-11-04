const express = require('express');
const app = express();
const port = 4000;

app.use((req, res, next)=> {
    console.log('soy el primer middleware');
    next();
})

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/datos', (req, res) => {
    res.send({ datos: 'mi dato' })
})

app.listen(port, () => {
    console.log('servidor corriendo')
})

/* ------------------------------------------------------------------------------------------------------ */

