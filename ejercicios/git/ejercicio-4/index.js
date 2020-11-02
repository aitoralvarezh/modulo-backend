// Enunciado:
// Usando el módulo fs de NodeJS, escribe una función que acepte como argumento un Path.
// La función deberá imprimir el string 'Es un directorio' si el Path que le pasamos es un directorio.
// La función deberá imprimir el string 'Es un archivo' si el Path que le pasamos es un archivo.
// La función deberá imprimir el string 'No existe' si el Path que le pasamos no existe.

// Puedes usar callbacks o promises, aunque lo recomendable es lo segundo.


const fs = require('fs').promises;
const path = require('path');

async function detect(ruta) {
    try {
        const info = await fs.stat(ruta);
        
        if (info.isDirectory()) {
            console.log('Es un directorio');
        } if (info.isFile()) {
            console.log('Es un archivo');
        }
    } catch (error) { //MANEJO DE ERRORES
        if (error.code === 'ENOENT'){
            console.log('No existe el archivo o directorio');
        } else {
            throw error;
        }
    }
}

const ruta = path.join(__dirname, 'esto no está definido') //FORZAMOS EL ERROR

detect(ruta)