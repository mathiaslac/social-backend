const SteamLogin = require("node-steam-openid");
const steam = new SteamLogin({
    realm: process.env.STEAM_SITE,
    returnUrl: process.env.STEAM_SITE + "/auth/handle",
    apiKey: process.env.STEAM_API
});

const jwt = require("jsonwebtoken");
const { Bans } = require("../config/db");
const convertor = require('steamidconvert')()
const fs = require('fs');

const generateJwt = (name, avatar, steamid64, steam_short, group) => {
    return jwt.sign(
        {name: name, avatar: avatar, steamid64: steamid64, steam_short: steam_short, group: group},
        process.env.SECRET_KEY,
        {expiresIn: process.env.JWT_TIME || '24h'}
    )
}

class AuthController {
    async auth( req, res, next ) {
        const redirectUrl = await steam.getRedirectUrl().catch((e) => console.log(e));
        return res.redirect(redirectUrl);
    }

    async refresh( req, res ) {
        const token = generateJwt(req.user.name, req.user.avatar, req.user.steamid64, req.user.steam_short, req.user.group);
        return res.json({token})
    }

    async check( req, res, next ) {
        try {
            const user = await steam.authenticate(req);
            const steam_short = convertor.convertToText(user.steamid).substring(10);

            Bans.query(`SELECT * FROM sb_admins WHERE authid LIKE "%${steam_short}%"`, function(err, results) {
                let group_return = 0;
                if( err )
                    console.log(err);
                if( typeof results !== "undefined" )
                {
                    let group = results[0]?.srv_group;
                    if( typeof group !== "undefined" )
                    {
                        const groups_levels = JSON.parse(fs.readFileSync('./config/groups.json', 'utf8'));
                        if( groups_levels[group] )
                            group_return = groups_levels[group];
                    }
                }
                const token = generateJwt(user.username, user.avatar, user.steamid, steam_short, group_return)
                return res.render("auth", {
                    jwtToken: token,
                    error: "",
                    ok: true,
                    clientUrl: process.env.FRONTEND_URL,
                });
            });
        } catch (error) {
            console.log(error);
            return res.render("auth", {
                jwtToken: null,
                error: "Unknown error!",
                ok: false,
                clientUrl: process.env.FRONTEND_URL,
            });
        }
    }
}

module.exports = new AuthController();
