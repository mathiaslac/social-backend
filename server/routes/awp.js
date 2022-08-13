const dotenv = require("dotenv");

const express = require("express");

const Gamedig = require("gamedig");

const router = express.Router();

dotenv.config();

router.get("/", async (req, res) => {
  const Gamedig = require("gamedig");

  const game = req.query.game;
  const ip = req.query.ip;
  const port = req.query.port;
  var response;

  await Gamedig.query({
    type: game,
    host: ip,
    port: port,
  })
    .then((state) => {
      response = state;
    })
    .catch((response = "Promise rejected, probrably you used wrong params"));

  res.send({
    info: response,
  });
});

module.exports = router;
