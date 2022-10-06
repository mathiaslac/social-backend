const axios = require("axios");
class AvatarController {
  async get(req, res, next) {
    const data = await axios.get(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${req.query["steamID"]}`
    );
    return res.json(data.data.response.players[0].avatarfull);
  }
}

module.exports = new AvatarController();
