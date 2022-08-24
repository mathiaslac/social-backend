const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  password: "root",
  user: "root",
  database: "dm",
  host: "127.0.0.1",
  port: "3306",
});

module.exports = pool;
