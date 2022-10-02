const { All } = require("../config/db");

class SearchController {
  async get(req, res, next) {
    All.query(`SELECT * FROM store_players`, (err, results) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }

      return res.json(results);
    });
  }
}

module.exports = new SearchController();
