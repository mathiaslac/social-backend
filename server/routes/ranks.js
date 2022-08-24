const express = require("express");

const awp = require("../db/ranks/awp");
const arena = require("../db/ranks/arena");
const retake = require("../db/ranks/retake");
const hns = require("../db/ranks/hns");
const dm = require("../db/ranks/dm");

const router = express.Router();

router.get("/awp", async (req, res) => {
  try {
    const results = await new Promise((resolve, reject) => {
      awp.query(
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

router.get("/arena", async (req, res) => {
  try {
    const results = await new Promise((resolve, reject) => {
      arena.query(
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

router.get("/retake", async (req, res) => {
  try {
    const results = await new Promise((resolve, reject) => {
      retake.query(
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

router.get("/hns", async (req, res) => {
  try {
    const results = await new Promise((resolve, reject) => {
      hns.query(
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

router.get("/dm", async (req, res) => {
  try {
    const results = await new Promise((resolve, reject) => {
      dm.query(
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

module.exports = router;
