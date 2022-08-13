const express = require('express');
const db = require('../db/bans');

const pool = require('../db/bans')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const results = await new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM sb_comms ORDER BY sb_comms . bid DESC`, (err, results) => {
                if(err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
        res.send(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});


// POUR GÉRER LA DB: https://sequelize.org/
// STEAMID: https://www.npmjs.com/package/steamid

//router.get('/:steamID', async (req, res) => {  
//    const steamID = new SteamID(req.params);
//    try {
//        const results = await new Promise((resolve, reject) => {
//            pool.query(`SELECT * FROM lvl_base_awp WHERE steam = ?`, `STEAM_1:0:${steamID}`, (err, results) => {
//                if(err) {
//                    return reject(err);
//                }
//                return resolve(results);
//            });
//        });
//        res.send(results);
//    } catch(e) {
//        console.log(e);
//});

module.exports = router;