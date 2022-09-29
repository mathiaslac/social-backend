const mysql = require("mysql");

const Arena = mysql.createPool({
  connectionLimit: 10,
  password: "root",
  user: "root",
  database: "arena",
  host: "127.0.0.1",
  port: "3306",
});

const Awp = mysql.createPool({
  connectionLimit: 10,
  password: "root",
  user: "root",
  database: "awp_lego",
  host: "127.0.0.1",
  port: "3306",
});

const Bhop = mysql.createPool({
  connectionLimit: 10,
  password: "root",
  user: "root",
  database: "bhop",
  host: "127.0.0.1",
  port: "3306",
});

const Dm = mysql.createPool({
  connectionLimit: 10,
  password: "root",
  user: "root",
  database: "dm",
  host: "127.0.0.1",
  port: "3306",
});

const Hns = mysql.createPool({
  connectionLimit: 10,
  password: "root",
  user: "root",
  database: "hns",
  host: "127.0.0.1",
  port: "3306",
});

const Retake = mysql.createPool({
  connectionLimit: 10,
  password: "root",
  user: "root",
  database: "retake",
  host: "127.0.0.1",
  port: "3306",
});

const Comp = mysql.createPool({
  connectionLimit: 10,
  password: "root",
  user: "root",
  database: "comp",
  host: "127.0.0.1",
  port: "3306",
});

const Bans = mysql.createPool({
  connectionLimit: 10,
  password: "root",
  user: "root",
  database: "all_db",
  host: "127.0.0.1",
  port: "3306",
});

const Comms = mysql.createPool({
  connectionLimit: 10,
  password: "root",
  user: "root",
  database: "all_db",
  host: "127.0.0.1",
  port: "3306",
});

const Admins = mysql.createPool({
  connectionLimit: 10,
  password: "root",
  user: "root",
  database: "all_db",
  host: "127.0.0.1",
  port: "3306",
});

const Vip = mysql.createPool({
  connectionLimit: 10,
  password: "root",
  user: "root",
  database: "all_db",
  host: "127.0.0.1",
  port: "3306",
});

const Blog = mysql.createPool({
  connectionLimit: 10,
  password: "root",
  user: "root",
  database: "blog",
  host: "127.0.0.1",
  port: "3306",
});

const All = mysql.createPool({
  connectionLimit: 10,
  password: "root",
  user: "root",
  database: "all_db",
  host: "127.0.0.1",
  port: "3306",
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
