const { Admins } = require("../config/db");

class AdminsController {
  async get(req, res, next) {
    Admins.query(
      "SELECT * FROM sb_admins ORDER BY srv_group",
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

module.exports = new AdminsController();
