const Router = require("express");
const MutesController = require("../../controllers/MutesController");
const router = new Router();

router.get("/", MutesController.get);

module.exports = router;