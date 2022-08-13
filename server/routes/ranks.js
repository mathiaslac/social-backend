const express = require("express");

const SteamID = require("steamid");

const pool = require("../db/ranks");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const results = await new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM lvl_base ORDER BY lvl_base . value DESC LIMIT 100`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
    res.send(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:SteamID", async (req, res) => {
  SteamID = new SteamID(req.params);
  try {
    const results = await new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM lvl_base WHERE steam = ${SteamID}`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
    res.send(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// POUR GÉRER LA DB: https://sequelize.org/
// STEAMID: https://www.npmjs.com/package/steamid

//const dasdj = [
//    { title: "Caca", count: 0 },
//    { title: "PIPI", count: 21 },
//].sort((a, b) => b.count - a.count )

//const ex = 546645

//const title = dasdj.find(rank => ex >= rank.count)

module.exports = router;
