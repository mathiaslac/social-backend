const dotenv = require("dotenv");

const express = require("express");

const router = express.Router();

dotenv.config();

router.get("/awp", async (req, res) => {
  const Gamedig = require("gamedig");

  const game = "csgo";
  const ip = "37.187.221.140";
  const port = "27015";
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

router.get("/retake", async (req, res) => {
  const Gamedig = require("gamedig");

  const game = "csgo";
  const ip = "37.187.221.141";
  const port = "27015";
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

router.get("/bhop", async (req, res) => {
  const Gamedig = require("gamedig");

  const game = "csgo";
  const ip = "141.95.134.28";
  const port = "27015";
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

router.get("/hns", async (req, res) => {
  const Gamedig = require("gamedig");

  const game = "csgo";
  const ip = "37.187.221.138";
  const port = "27015";
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

router.get("/dm", async (req, res) => {
  const Gamedig = require("gamedig");

  const game = "csgo";
  const ip = "46.105.220.236";
  const port = "27015";
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

router.get("/comp", async (req, res) => {
  const Gamedig = require("gamedig");

  const game = "csgo";
  const ip = "54.36.34.185";
  const port = "27015";
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
