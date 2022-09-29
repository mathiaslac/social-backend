const steam = require("steamidconvert");
const axios = require("axios");

class AvatarController {
  async get(req, res, next) {
    const { steamID } = req.params;
    const steam64 = steam.convertTo64(steamID);
    const data = await axios.get(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_API}&steamids=${steam64}`
    );
    console.log(data);
    return res.json(data);
  }
}

module.exports = new AvatarController();
