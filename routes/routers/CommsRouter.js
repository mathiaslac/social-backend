const Router = require("express");
const CommsController = require("../../controllers/CommsController");
const router = new Router();

router.get("/", CommsController.get);

module.exports = router;
