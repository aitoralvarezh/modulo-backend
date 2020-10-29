const path = require('path');

const miRuta = '////home//hab01';

const otraRuta = 'trabajo.pdf';

const rutanormalizada = path.normalize(miRuta);
const rutaCompleta = path.join(rutanormalizada, otraRuta)

console.log(path.normalize(rutaCompleta));

//ejecutar en terminal con 'node path'