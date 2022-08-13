var passport = require("passport");
const SteamStrategy = require("passport-steam");

passport.use(
  new SteamStrategy(
    {
      returnURL: "http://localhost:3000/auth/steam/return",
      realm: "http://localhost:3000/",
      apiKey: "580D83F70BA4F7FDD1007607561AFDFB",
    },
    function (identifier, profile, done) {
      console.log(profile);
      // Check if user exists in database

      // Add user if not in database
      return done(null, profile);
    }
  )
);
