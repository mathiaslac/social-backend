const mysql = require("mysql");

const Arena = mysql.createPool({
  connectionLimit: 10,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_NAME_ARENA,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

const Awp = mysql.createPool({
  connectionLimit: 10,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_NAME_AWP,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

const Bhop = mysql.createPool({
  connectionLimit: 10,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_NAME_BHOP,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

const Dm = mysql.createPool({
  connectionLimit: 10,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_NAME_DM,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

const Hns = mysql.createPool({
  connectionLimit: 10,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_NAME_HNS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

const Retake = mysql.createPool({
  connectionLimit: 10,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_NAME_RETAKE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

const Comp = mysql.createPool({
  connectionLimit: 10,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_NAME_COMP,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

const Bans = mysql.createPool({
  connectionLimit: 10,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_NAME_ALL,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

const Comms = mysql.createPool({
  connectionLimit: 10,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_NAME_ALL,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

const Admins = mysql.createPool({
  connectionLimit: 10,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_NAME_ALL,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

const Vip = mysql.createPool({
  connectionLimit: 10,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_NAME_ALL,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

const Blog = mysql.createPool({
  connectionLimit: 10,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: "blog",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

const All = mysql.createPool({
  connectionLimit: 10,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_NAME_ALL,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

module.exports = {
  Arena,
  Awp,
  Dm,
  Bhop,
  Hns,
  Retake,
  Bans,
  Comms,
  Admins,
  Vip,
  Blog,
  Comp,
  All,
};
