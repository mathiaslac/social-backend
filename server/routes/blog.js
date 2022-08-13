const express = require("express");

const pool = require("../db/blog");

const router = express.Router();

router.get("/get", async (req, res) => {
  pool.query("SELECT * posts");
});

router.post("/create", async (req, res) => {
  const username = req.body.userName;
  const text = req.body.text;
  const img = req.body.postImg;

  pool.query(
    "INSERT INTO posts (post_text, user_name, post_img) VALUES (?,?,?)",
    [text, username, img],
    (err, result) => {
      if (err) {
        console.log(err);
      }

      console.log(result);
    }
  );
});

module.exports = router;
