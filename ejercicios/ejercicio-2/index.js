// Enunciado:
// Usando el módulo fs de NodeJS, escribe una función que acepte como argumentos un Path y un string.
// Después llama a esta función para escribir un fichero file.txt en el directorio actual el contenido 'Hola Backend!'

// Puedes usar callbacks o promises, aunque lo recomendable es lo segundo.


const fs = require('fs').promises;
const path = require('path');

async function writeFile() {
    try {
        const content = await fs.writeFile('file.txt', '¡Hola BackEnd!')
        
        console.log('el fickero ha sido escrito');
    }
    catch (error){
        console.log('Algo ha fallado');
    }
}
writeFile()

async function escribeFichero(ruta, data) {
    try {
        await fs.writeFile(ruta, data);
    } catch (error) {
        console.error('Ha ocurrido un error');
    }
}


const ruta = path.join(__dirname, 'fichero.txt');
const data = '¡Hola BackEnd';
escribeFichero(ruta, data)