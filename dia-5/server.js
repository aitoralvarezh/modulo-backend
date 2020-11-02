console.log('Hola');

const http = require('http');
const port = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
    const method = req.method;
    const ruta = req.url;
    const headers = req.headers;

    console.log('metodo' + method);
    console.log('ruta' + ruta);
    console.log('headers: ');
    console.log(headers);

    res.setHeader('content-Type', 'text/html');
    res.setHeader('content-lenght', '214');// 214 es inventado

    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Hello, Backend!</h1>');
    res.write('</body>');
    res.write('</html>');
});

// GUARDAR Y EJECUTAR EM CONSOLA, DESPUES ABRIR EL NAVEGADOR E INTRODUCIR LA URL LOCALHOST:3000

server.listen(port);
