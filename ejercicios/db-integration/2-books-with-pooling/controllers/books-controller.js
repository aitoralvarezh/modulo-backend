const { database } = require('../infrastructure')

async function getBooks(req, res) {
  try {
    // enviamos el listado de libros al cliente.
  } catch (err) {
    // enviamos el error al cliente.
  }
}

async function addBook(req, res) {
  try {
    // validamos los datos de entrada.
    // añadimos el libro a la base de datos y
    // devolvemos el libro añadido al cliente.
  } catch (err) {
    // enviamos el error al cliente.
  }
}

async function updateBook(req, res) {
  try {
    // validamos los datos de entrada.
    // buscamos el libro a modificar, si no existe respondemos 404
    // modificamos el libro en la base de datos y
    // devolvemos el libro modificado al cliente.
  } catch (err) {
    // enviamos el error al cliente.
  }
}


async function modifyBook(req, res) {
  try {
    
  } catch (err) {
    
  }
}
// Nuevo PATCH endpoint assignBook que asigna un libro a un usuario
// recibirá el id del libro como request param :id
// recibiré el id del usuario en el body de la request,
// es decir: { userId: $idDelUsuario } (habrá que validarlo)
// El endpoint:
// 1. Si el libro no existe, deberá responder 404 e indicarlo.
// 1. Si el usuario no existe, deberá responder 404 e indicarlo.
// 3. Si el libro está prestado a otro usuario deberá responder
// 400 e indicarlo.
// 4. Si el libro existe y está libre, deberá asignarlo al usuario
// que se manda en la request y responder con los datos del libro
// que ha sido modificado.


// Nuevo PATCH endpoint unassignBook que libera un libro.
// Recibirá el id del libro como request param :id
// El endpoint:
// 1. Si el libro no existe, deberá responder 404 e indicarlo.
// 3. Si el libro ya está libre, deberá responder 400 e indicarlo.
// 4. Si el libro existe y no está libre, deberá desasignarlo
// y responder con los datos del libro que ha sido modificado.

// Nuevo DELETE endpoint deleteBook que borra un libro.
// Recibirá el id del libro como request param :id
// El endpoint:
// 1. Si el libro no existe, deberá responder 404 e indicarlo.
// 3. Si el libro no está libre, deberá responder 400 e indicarlo.
// 4. Si el libro existe y está libre, deberá borrarlo, poner el
// status code 204 en la response y no devolver ningún contenido en el body.


// (recuerda exportar esto dos últimos controllers y configurar sus rutas)

// Ejercicio extra: varios controllers realizan la misma operación
// de comprobar si un libro existe, factoriza ese código a una nueva
// función y llama a esa nueva función desde los controllers en
// lugar de repetir el código en múltiples sitios. (DRY!!) 

module.exports = {
  addBook,
  getBooks,
  updateBook,
  modifyBook
};
