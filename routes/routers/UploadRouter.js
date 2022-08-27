const Router = require("express");
const uploadController = require("../../controllers/uploadController");
const router = new Router();

router.get("/", uploadController.upload);

module.exports = router;