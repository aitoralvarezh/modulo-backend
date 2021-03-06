const mysql = require('mysql2/promise');

const {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
} = process.env;

async function getConnection() {
  const connection = await mysql.createConnection({
    host: DATABASE_HOST,
    database: DATABASE_NAME,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
  });

  return connection;
}

module.exports = { getConnection };