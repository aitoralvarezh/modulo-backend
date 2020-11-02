// Enunciado:
// Usando el módulo fs de NodeJS, escribe una función que acepte como argumento un nombre de archivo.
// La función deberá borrar ese archivo del directorio actual.
// La función deberá imprimir el string 'No existe' si el nombre de archivo que le pasamos no existe.
// Si se produce algun error, deberá imprimir el error.

// Puedes usar callbacks o promises, aunque lo recomendable es lo segundo.

const fs = require('fs').promises;
const path = require('path');

async function deleteItem(name) {
    try {
        const ruta = path.join(__dirname, name);
        await fs.unlink(ruta);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('no se encontró el archivo');
        } else {
            throw error;
        }
    }
}

deleteItem('borrame.txt')