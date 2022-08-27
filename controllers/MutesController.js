const {Bans} = require("../config/db");

class MutesController {
    async get(req, res, next) {
        Bans.query(
            `SELECT * FROM sb_comms ORDER BY sb_comms . bid DESC`,
            (err, results) => {
                if( err )
                {
                    console.log(err);
                    return res.sendStatus(500);
                }

                return res.json(results);
            }
        );
    }
}

module.exports = new MutesController();