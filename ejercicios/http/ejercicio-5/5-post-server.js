// Servidor web que escucha y loguea cualquier request.
// Cuando la request es un POST a /data, se devuelve el JSON recibido.
// Cuando es otra request cualquiera, se responde 404 Not Found sin body.

const http = require('http');
const server = http.createServer();
const port = 3000;
const hostname = 'localhost';

server.on('request', (req, res) => {
    let body = [];
    req.on('error', () => console.log('Ha habido un error'))
    req.on('data', (datos) => body.push(datos));
    req.on('end', () => {
        body = Buffer.concat(body).toString()

        if (req.url === '/data' && req.method === 'POST') {
            res.statusCode = 200;
            res.setHeader('content-Type', 'application/json');
            res.end(body);
        } else {
            res.statusCode = 404;
            res.end();
        }
    })
});

server.listen(port, hostname, () => console.log('Estoy escuchando'));