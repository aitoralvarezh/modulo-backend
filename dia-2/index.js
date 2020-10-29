console.log(process.argv);

function esMayor(edad) {
    if (edad>18) {
        console.log('es mayor de edad')
    } else {
        console.log('es menor de edad');
    }
}

const edad = process.argv[2]
esMayor(edad);