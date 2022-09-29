const { Comms } = require("../config/db");

class CommsController {
  async get(req, res, next) {
    Comms.query("SELECT * FROM sb_comms ORDER BY bid DESC", (err, results) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }

      return res.json(results);
    });
  }
}

module.exports = new CommsController();
