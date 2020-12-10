const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'cedric',
  password: 'admin',
  database: 'cantina-da-batatinha'
});

module.exports = connection;
