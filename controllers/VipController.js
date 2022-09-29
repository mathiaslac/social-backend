const { Vip } = require("../config/db");

class VipController {
  async get(req, res, next) {
    Vip.query("SELECT * FROM vip_users", (err, results) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }

      return res.json(results);
    });
  }
}

module.exports = new VipController();
