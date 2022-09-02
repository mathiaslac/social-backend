const Router = require("express");
const ShopController = require("../../controllers/ShopController");
const router = new Router();

router.get("/:steamID", ShopController.get);

module.exports = router;
