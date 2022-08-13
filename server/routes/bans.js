const express = require("express");

const pool = require("../db/bans");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const results = await new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM sb_bans ORDER BY sb_bans . bid DESC`,
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

module.exports = router;
