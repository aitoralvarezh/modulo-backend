// Servidor web que escucha cualquier request y devuelve el objeto
// { curso: 'backend' } cuando se llama al la ruta /curso
// y devuelve { message: 'hello world' } cuando se llama a otra ruta distinta

const http = require('http');
const server = http.createServer();
const hostname = 'localhost';
const port = 3000;

server.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'application/json');

    if (req.url === '/curso') {
        res.end(JSON.stringify({ message: 'Hola Curso' }))
    } else {
        
        res.end(JSON.stringify({ message: 'Hola Backend' }))
    }
});

server.listen(port, hostname, () => {
    console.log('server running');
})