const axios = require("axios");
const steam = require("steamidconvert");

class AvatarController {
  async get(req, res, next) {
    const steam64 = steam.convertTo64(req.params);
    const data = await axios.get(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${
        process.env.STEAM_API_KEY
      }&steamids=${steam.convertTo64(steam64["steamID"])}`
    );
    return res.json(data.data.response.players);
  }
}

module.exports = new AvatarController();
