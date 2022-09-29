const { Bans } = require("../config/db");

class BansController {
  async get(req, res, next) {
    Bans.query("SELECT * FROM sb_bans ORDER BY bid DESC", (err, results) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }

      return res.json(results);
    });
  }
}

module.exports = new BansController();
