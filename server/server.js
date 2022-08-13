const express = require("express");
const bansRouter = require("./routes/bans");
const mutesRouter = require("./routes/mutes");
const ranksRouter = require("./routes/ranks");
const vipRouter = require("./routes/vip");
const awpRouter = require("./routes/awp");
const blogRouter = require("./routes/blog");
const uploadRouter = require("./routes/upload");
const cors = require("cors");
const dotenv = require("dotenv");
const steam = require("steam-login");

const corsOptions = {
  //   origin: ["http://localhost:3000"],
  origin: true,
  optionsSuccessStatus: 200,
  credentials: true,
};

dotenv.config();

const app = express();

app.use((req, res, next) => {
  console.log("New request !", req.headers["user-agent"]);
  next();
});

app.use(express.json(), cors(corsOptions));

app.use(
  steam.middleware({
    verify: "http://localhost:5000/verify",
    apiKey: "580D83F70BA4F7FDD1007607561AFDFB", // Place your API key here,
  })
);

app.use(
  require("express-session")({
    resave: false,
    saveUninitialized: false,
    secret: "a secret",
  })
);

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/authenticate", steam.authenticate());

app.get("/verify", steam.verify(), (req, res) => {
  console.log(res);
  return res.redirect("http://localhost:3000/");
});

app.get("/logout", steam.enforceLogin("/"), function (req, res) {
  req.logout();
  return res.redirect("http://localhost:3000/");
});

// app.use("/api/upload", uploadRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/blog", blogRouter);
app.use("/api/blog", blogRouter);
app.use("/api/bans", bansRouter);
app.use("/api/mutes", mutesRouter);
app.use("/api/ranks", ranksRouter);
app.use("/api/vip", vipRouter);
app.use("/api/awp", awpRouter);

app.listen(5000, () => console.log("Server Started..."));
