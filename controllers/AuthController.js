const SteamLogin = require("node-steam-openid");
const steam = new SteamLogin({
    realm: process.env.STEAM_SITE,
    returnUrl: process.env.STEAM_SITE + "/auth/handle",
    apiKey: process.env.STEAM_API
});

const jwt = require("jsonwebtoken");
const convertor = require('steamidconvert')()

const generateJwt = (name, avatar, steamid64, steam_short) => {
    return jwt.sign(
        {name: name, avatar: avatar, steamid64: steamid64, steam_short: steam_short},
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
        const token = generateJwt(req.user.name, req.user.avatar, req.user.steamid64, req.user.steam_short);
        return res.json({token})
    }

    async check( req, res, next ) {
        try {
            const user = await steam.authenticate(req);
            const steam_short = convertor.convertToText(user.steamid).substring(10);
            
            const token = generateJwt(user.username, user.avatar, user.steamid, steam_short)
            return res.render("auth", {
                jwtToken: token,
                error: "",
                ok: true,
                clientUrl: process.env.FRONTEND_URL,
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