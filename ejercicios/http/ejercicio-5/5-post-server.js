// Servidor web que escucha y loguea cualquier request.
// Cuando la request es un POST a /data, se imprime por pantalla el JSON recibido.
// Cuando es otra request cualquiera, se responde 404 Not Found sin body.

const http = require('http');

