
const { database } = require('../infrastructure')
const joi = require('joi');


async function getUsers(req, res) { // enviamos el listado de usuarios al cliente
  try {
    const connection = await database.getConnection();
    const query = 'SELECT * FROM `users`';
    const result = await connection.query(query);

    await connection.end();

    res.send(result[0]);

  } catch (err) {  // enviamos el error al cliente
    res.status(500)
    res.send(err.message)

  }
}

async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const schema = joi.number().positive();// validamos que el id es un número positivo
    const validation = schema.validate(id);

    if (validation.error) {
      res.status(400);
      res.send({ error: validation.error });
    } else {
      const connection = await database.getConnection();
      const query = 'SELECT * FROM users  WHERE id = ?';
      const [rows] = await connection.query(query, id);

      if (!rows || rows.length === 0) {
        res.status(404)
        res.send({ error: 'User not found' }); // devolvemos 404 Not Found si no encontramos el user en base de datos.
      } else {
        res.send(rows); // enviamos el usuario encontrado al cliente
      }
      await connection.end();
    }

  } catch (err) { 
    res.status(500)
    res.send(err.message); // enviamos el error al cliente
  }
}

module.exports = {
  getUsers,
  getUserById,
};
