const Router = require("express");
const BansController = require("../../controllers/BansController");
const router = new Router();

router.get("/", BansController.get);

module.exports = router;