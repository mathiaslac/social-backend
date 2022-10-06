const { All } = require("../config/db");

class ShopController {
  async get(req, res, next) {
    All.query(
      `SELECT * FROM shop_players WHERE auth LIKE "%${req.params["steamID"]}%"`,
      (err, results) => {
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        }

        return res.json(results);
      }
    );
  }
}

module.exports = new ShopController();
