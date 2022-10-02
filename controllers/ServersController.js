const { SourceQuerySocket } = require("source-server-query");
const query = new SourceQuerySocket();

const steam_short = require("./AuthController");

const SteamID = require("steamid");

class ServersController {
  async ranks(req, res, next) {
    req.serverid.db.query(
      "SELECT * FROM lvl_base ORDER BY lvl_base.value DESC LIMIT 100",
      (err, result) => {
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        }
        return res.json(result);
      }
    );
  }

  async allranks(req, res, next) {
    req.serverid.db.query(
      `SELECT * FROM lvl_base WHERE steam LIKE "%${req.params["steamID"]}%"`,
      (err, result) => {
        if (err) {
          console.log(result);
          return res.sendStatus(500);
        }
        return res.json(result);
      }
    );
  }

  async player(req, res, next) {
    req.serverid.db.query(
      `SELECT * FROM lvl_base WHERE steam LIKE "%${req.params["steamID"]}%"`,
      (err, result) => {
        if (err) {
          console.log(result);
          return res.sendStatus(500);
        }
        return res.json(result);
      }
    );
  }
  async clutch(req, res, next) {
    req.serverid.db.query(
      `SELECT * FROM lvl_base_clutch WHERE steam LIKE "%${req.params["steamID"]}%"`,
      (err, result) => {
        if (err) {
          console.log(result);
          return res.sendStatus(500);
        }
        return res.json(result);
      }
    );
  }
  async geoip(req, res, next) {
    req.serverid.db.query(
      `SELECT * FROM lvl_base_geoip WHERE steam LIKE "%${req.params["steamID"]}%"`,
      (err, result) => {
        if (err) {
          console.log(result);
          return res.sendStatus(500);
        }
        return res.json(result);
      }
    );
  }
  async hits(req, res, next) {
    req.serverid.db.query(
      `SELECT * FROM lvl_base_hits WHERE steam LIKE "%${req.params["steamID"]}%"`,
      (err, result) => {
        if (err) {
          console.log(result);
          return res.sendStatus(500);
        }
        return res.json(result);
      }
    );
  }
  async maps(req, res, next) {
    req.serverid.db.query(
      `SELECT * FROM lvl_base_maps WHERE steam LIKE "%${req.params["steamID"]}%"`,
      (err, result) => {
        if (err) {
          console.log(result);
          return res.sendStatus(500);
        }
        return res.json(result);
      }
    );
  }
  async uk(req, res, next) {
    req.serverid.db.query(
      `SELECT * FROM lvl_base_uk WHERE steam LIKE "%${req.params["steamID"]}%"`,
      (err, result) => {
        if (err) {
          console.log(result);
          return res.sendStatus(500);
        }
        return res.json(result);
      }
    );
  }
  async weapons(req, res, next) {
    req.serverid.db.query(
      `SELECT * FROM lvl_base_weapons WHERE steam LIKE "%${req.params["steamID"]}%"`,
      (err, result) => {
        if (err) {
          console.log(result);
          return res.sendStatus(500);
        }
        return res.json(result);
      }
    );
  }

  async count(req, res, next) {
    req.serverid.db.query(
      "SELECT COUNT(*) namesCount FROM lvl_base",
      (err, result) => {
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        }
        return res.json(result);
      }
    );
  }

  async monitoring(req, res, next) {
    await query
      .info(req.serverid.ip, req.serverid.port, 1000)
      .then((data) => {
        return res.send(this.bigint_fix(data));
      })
      .catch((e) => {
        console.log(`ERR - ${e}`);
        return res.json([]);
      });
  }

  async monitoring_players(req, res, next) {
    await query
      .players(req.serverid.ip, req.serverid.port, 1000)
      .then((data) => {
        return res.send(this.bigint_fix(data));
      })
      .catch((e) => {
        console.log(`ERR - ${e}`);
        return res.json([]);
      });
  }

  /**
   * JSON have problems with bigint
   */
  bigint_fix(object) {
    if (object !== undefined) {
      return JSON.stringify(object, (_, v) =>
        typeof v === `bigint` ? `${v}#bigint` : v
      ).replace(/"(-?\d+)#bigint"/g, (_, a) => a);
    }
  }
}

module.exports = new ServersController();
