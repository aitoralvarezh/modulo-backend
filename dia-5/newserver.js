console.log('Hola');

const http = require('http');
const port = 3000;

const server = http.createServer();

server.on('request', (req, res)=> {
   let body = [];

   req.on('error', err =>console.log(err));
   req.on ( 'data', chunk => body.push (chunk));
   req.on('end', ()=> {
        const bodyCompleto = Buffer.concat(body).toString();
   })
});

server.listen(port);
