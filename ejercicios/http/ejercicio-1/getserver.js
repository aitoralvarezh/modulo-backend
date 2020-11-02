// Servidor web que escucha cualquier request y devuelve el objeto
// { curso: 'backend' }

const http = require('http');
const server = http.createServer();
const hostname = 'localhost';
const port = 3000;


server.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify({ curso: 'backend' }))
})

server.listen(port, hostname, () => {
    console.log('server running on ' + hostname + ':' + port);
})