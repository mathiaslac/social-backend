const express = require("express");
steam = require("steam-login");
const bansRouter = require("./routes/bans");
const mutesRouter = require("./routes/mutes");
const ranksRouter = require("./routes/ranks");
const vipRouter = require("./routes/vip");
const serversRouter = require("./routes/servers");
const blogRouter = require("./routes/blog");
const uploadRouter = require("./routes/upload");
const cors = require("cors");
const dotenv = require("dotenv");

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
  require("express-session")({
    resave: false,
    saveUninitialized: false,
    secret: "a secret",
  })
);

app.get("/", (req, res) => {
  res.send("hello express");
});

app.use(
  steam.middleware({
    realm: "http://localhost:5000/",
    verify: "http://localhost:5000/verify",
    apiKey: "580D83F70BA4F7FDD1007607561AFDFB",
  })
);

app.get("/", function (req, res) {
  res
    .send(req.user == null ? "not logged in" : "hello " + req.user.username)
    .end();
});

app.get("/authenticate", steam.authenticate(), function (req, res) {
  res.redirect("http://localhost:3000/");
});

app.get("/verify", steam.verify(), function (req, res) {
  res.send(req.user);
});

app.get("/logout", steam.enforceLogin("/"), function (req, res) {
  req.logout();
  res.redirect("/");
});

// app.use("/api/upload", uploadRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/blog", blogRouter);
app.use("/api/blog", blogRouter);
app.use("/api/bans", bansRouter);
app.use("/api/mutes", mutesRouter);
app.use("/api/ranks", ranksRouter);
app.use("/api/vip", vipRouter);
app.use("/api/servers", serversRouter);

app.listen(5000, () => console.log("Server Started..."));
