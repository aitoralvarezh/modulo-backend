
const { database } = require('../infrastructure')
const joi = require('joi');

async function getUsers(req, res) {
  try {
    const query = 'SELECT * FROM users'
    const result = await database.pool.query(query); // enviamos el listado de usuarios al cliente
    res.send(result[0]);
  } catch (err) { // enviamos el error al cliente
    res.status(500);
    res.send({ error: err.message });
  }
}
// validamos que el id es un número positivo
// enviamos el usuario encontrado al cliente
// devolvemos 404 Not Found si no encontramos el user en base de datos.
async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const schema = joi.number().positive();
    const validation = schema.validate(id);
    const query = 'SELECT * FROM users WHERE id = ?'
    const [rows] = await database.pool.query(query, id);
    if (!rows || rows.length === 0) {
      res.status(400);
      res.send({ error: 'User not found' });

    } else {
      res.send(rows);
    }

  } catch (err) { // enviamos el error al cliente
    res.status(500)
    res.send(err.message);
  }
}

module.exports = {
  getUsers,
  getUserById,
};
