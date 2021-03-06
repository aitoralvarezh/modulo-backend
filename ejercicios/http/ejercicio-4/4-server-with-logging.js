// Servidor web que escucha cualquier request y devuelve el objeto
// { curso: 'backend' } cuando se llama al la ruta /curso
// devuelve { message: 'hello world' } cuando se llama /message
// y devuelve el texto 'No lo encuentro!' con status 404 en otro caso.
// Además, el servidor imprime por pantalla el método y la URL de cada request.

const http = require('http');
const server = http.createServer();
const hostname = 'localhost';
const port = 3000;

server.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'application/json');

    console.log(`se ha llamado a la ruta ${req.url}, con el método ${req.method}, a las ${new Date()}`)
    if (req.url === '/curso') {
        res.end(JSON.stringify({ message: 'Hola Curso' }))
    } else if (req.url === '/message'){
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Hola Backend' }))
    }else {
        res.statusCode = 404;
        res.setHeader('content.Type', 'text/plain')
        res.end('No lo encuentro')
    }
});

server.listen(port, hostname, () => {
    console.log('server running');
})