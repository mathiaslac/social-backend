const axios = require("axios");
class AvatarController {
  async get(req, res, next) {
    const data = await axios.get(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${req.query["steamIDS"]}`
    );
    
    const filter = data.data.response.players.map((user) => {
      return {
        steamid: user['steamid'],
        avatarfull: user['avatarfull']
      }
    })
    
    return res.json({
      players: filter
    })
  }
}

module.exports = new AvatarController();
