// Servidor web que escucha cualquier request y devuelve el objeto
// { curso: 'backend' } cuando se llama al la ruta /curso
// y devuelve { message: 'hello world' } cuando se llama a otra ruta distinta

const http = require('http');