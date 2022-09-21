require("dotenv").config();

// Express
const express           = require("express");

// CORS
const cors              = require("cors");

// Index routes
const router            = require("./routes/index");

// Auth routers, just openid
const routerAuth        = require("./routes/indexAuth");

// Error parser middleware
const errorHandler      = require("./middleware/ErrorHandlingMiddleware")

// Start server with .env port
const PORT              = process.env.PORT || 5000;
const app               = express();
const path              = require("path");
const fileUpload        = require("express-fileupload");

app.use(fileUpload({
    limits: { fileSize: 104857600 },
}));

// app view folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.json());
app.use(cors());
app.use("/api", router);

// For api folder
app.use("/api/auth", routerAuth);

app.get('*', function(req, res){
    res.status(404).send('what???');
});

app.use(errorHandler);

const start = async () => {
    try {
        // Open port API
        app.listen(PORT);

        console.log(`Application started on port - ${PORT}`)
    } catch( e ) {
        console.log(e);
    }
}

start();