// requerimos el repositorio de usuarios para llamar a
// sus funciones desde los controllers.

async function getUsers(req, res) {
  try {
    // enviamos el listado de usuarios al cliente
  } catch (err) {
    // enviamos el error al cliente
  }
}

async function getUserById(req, res) {
  try {
    // validamos que el id es un número positivo
    // enviamos el usuario encontrado al cliente
    // devolvemos 404 Not Found si no encontramos el user en base de datos.
  } catch (err) {
    // enviamos el error al cliente
  }
}

module.exports = {
  getUsers,
  getUserById,
};
