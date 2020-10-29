const fs = require('fs');

fs.writeFile('fichero.txt', 'Hola amigos!', function(error){
    if (error){ console.error(error)

    console.log('El fichero se escribió correctamente');
    } else {
        console.log('el fichero ya está escrito'); //modificar
    }

});

console.log('seguimos haciendo cosas');

//fs creará en este caso un fichero nuevo llamado fichero.txt una vez ejecutado, si ya esta ejecutado, se mostrará por consola.

