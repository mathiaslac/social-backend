const { SourceQuerySocket } = require('source-server-query');
const query = new SourceQuerySocket();

class ServersController {
    async ranks(req, res, next) {
        req.serverid.db.query(
            'SELECT * FROM lvl_base ORDER BY lvl_base.value DESC LIMIT 100',
            (err, result) => {
                if( err )
                {
                    console.log(err);
                    return res.sendStatus(500);
                }
                return res.json(result);
            }
        );
    }

    async monitoring(req, res, next) {
        await query.info(req.serverid.ip, req.serverid.port, 1000).then((data) => {
            return res.json(this.bigint_fix(data));
        });
    }

    async monitoring_players(req, res, next) {
        await query.players(req.serverid.ip, req.serverid.port, 1000).then((data) => {
            return res.json(this.bigint_fix(data));
        });
    }

    /**
     * JSON have problems with bigint
     */
    bigint_fix( object ) {
        return JSON.parse(JSON.stringify(object, (_, v) => typeof v === 'bigint' ? v.toString() : v))
    }
}

module.exports = new ServersController();