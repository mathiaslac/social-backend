require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const routerAuth = require("./routes/indexAuth");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const PORT = process.env.PORT || 5000;
const app = express();
const path = require("path");
const fileUpload = require("express-fileupload");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use("/api/auth", routerAuth);
app.use(errorHandler);
app.use(
  fileUpload({
    limits: { fileSize: 104857600 },
  })
);

app.get("*", function (req, res) {
  res.status(404).send("what???");
});

const start = async () => {
  try {
    // Open port API
    app.listen(PORT);

    console.log(`Application started on port - ${PORT}`);
  } catch (e) {
    console.log(e);
  }
};

start();
