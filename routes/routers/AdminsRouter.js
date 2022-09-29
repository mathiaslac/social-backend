const Router = require("express");
const AdminsController = require("../../controllers/AdminsController");
const router = new Router();

router.get("/", AdminsController.get);

module.exports = router;
