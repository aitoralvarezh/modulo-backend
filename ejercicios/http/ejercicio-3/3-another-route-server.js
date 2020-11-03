// Servidor web que escucha cualquier request y devuelve el objeto
// { curso: 'backend' } cuando se llama al la ruta /curso
// devuelve { message: 'hello world' } cuando se llama /message
// y devuelve el texto 'No lo encuentro!' con status 404 en otro caso

const http = require('http');
const server = http.createServer();
const hostname = 'localhost';
const port = 3000;

server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/curso') {
        res.statusCode = 200;
        res.end(JSON.stringify({ Curso: 'Backend' }))

    } else if (req.url === '/message') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Hello World' }))
    } else {
        res.statusCode = 404
        res.setHeader('content-Type', 'text/plain');
        res.end('Lo siento, no lo encuentro.');

        //res.end(JSON.stringify( { message: 'No lo encuentro'}))
    }
})

server.listen(port, hostname, () => {
    console.log('server running');
})