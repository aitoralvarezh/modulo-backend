
const express = require('express');
const joi = require('joi');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.post('/articulos', (req, res) => {
    const schema = joi.object({
        nombre: joi.string(),
        referencia: joi.number().required(),
    })
    const validation = schema.validate(req.body);

    if (validation.error) {
        res.status(400);
        res.send({ error: validation.error })
    } else {
        res.send(req.body)
    }
});



app.listen(3000)
