const Router = require("express");
const VipController = require("../../controllers/VipController");
const router = new Router();

router.get("/", VipController.get);

module.exports = router;