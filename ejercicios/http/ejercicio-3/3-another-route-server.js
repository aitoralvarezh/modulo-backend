// Servidor web que escucha cualquier request y devuelve el objeto
// { curso: 'backend' } cuando se llama al la ruta /curso
// devuelve { message: 'hello world' } cuando se llama /message
// y devuelve el texto 'No lo encuentro!' con status 404 en otro caso

const http = require('http');