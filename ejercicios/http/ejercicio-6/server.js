require('dotenv').config();

const http = require('http');
const port = process.env.PORT;
const server = http.createServer();
const fs = require('fs').promises;
const path = require('path')

server.on('request', (req, res) => {
    let body = [];

    req.on('error', (error) => {
        console.error(error);
    });

    req.on('data', (chunk) => {
        body.push(chunk);
    });

    req.on('end', async () => {
        body = Buffer.concat(body).toString();
        const { url, method } = req;

        if (url === '/' || url === '/index.html') { // Devolvemos el index.html

            const data = await fs.readFile(path.join(__dirname, '/www/index.html'), 'utf-8');
            res.statusCode = 200;
            res.setHeader('content-Type', 'text/html');
            res.end(data)

        } else if (url === '/js/main.js') { // Devolvemos el archivo .js
            
            const data = await fs.readFile(path.join(__dirname, '/www/main.js'), 'utf-8');
            res.statusCode = 200;
            res.setHeader('content-Type', 'application/javascript');
            res.end(data)

        } else if (method.toUpperCase() === 'GET' && url === '/data') { // Devolvemos JSON con mensajes

            const data = await fs.readFile(path.join(__dirname, '/www/datos.json'), 'utf-8');
            res.statusCode = 200;
            res.setHeader('content-Type', 'application/json');
            res.end(data)

        } else if (method.toUpperCase() === 'POST' && url === '/data') { // Añadimos mensaje a la lista

            const newMessage = JSON.parse(body)
            const data = await fs.readFile(path.join(__dirname, 'datos.json'), 'utf-8');
            const dataObject = JSON.parse(data);
            dataObject.messages.push(newMessage);

           await fs.writeFile(path.join(__dirname, 'datos.json'), JSON.stringify(dataObject));

            res.statusCode = 200;
            res.setHeader('content-Type', 'application/json')
            res.end(JSON.stringify(dataObject))
        
        } else { // Respondemos con un 404 Not Found

        }

    });
});

server.listen(port);
console.log(`Servidor web funcionando en http://localhost:${port}`);
