// Enunciado:
// Usando el módulo fs de NodeJS, muestra por pantalla el contenido de file.txt
// Puedes usar callbacks o promises, aunque lo recomendable es lo segundo.

// PISTA: el contenido se lee como un Buffer de datos, usa UTF-8 para leerlo.


const fs = require('fs').promises;

async function readFile() {
    try {
        const contenido = await fs.readFile('file.txt', 'utf-8')
        console.log(contenido);
    } catch (error) {
        console.log('ha habido un error');
    }
}
readFile()

//al ejecutarlo deberia devolver el contenido de file.txt pero como un buffer.
//se añade como parametro 'utf-8' para poder leerlo correctamente
