const fs = require ('fs').promises;

async function writeFile() {
    try {
        await fs.writeFile('fichero2.txt', 'Hola amigos! Creado con una promesa.')
        console.log('Escritura correcta');
    } catch (error) {
         console.error('ha habido un error');
    }
}
writeFile()