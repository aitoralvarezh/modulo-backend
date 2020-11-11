const { database } = require('../infrastructure')

async function getBooks(req, res) {
  try {    // enviamos el listado de libros al cliente.
    const connection = await database.getConnection();
    const query = 'SELECT * FROM `books`';
    const result = await connection.query(query);
    
    await connection.end();

    res.send(result[0])
  } catch (err) {    // enviamos el error al cliente.
    res.status(500);
    res.send(err.message);

  }
}

module.exports = {
  getBooks,
};
