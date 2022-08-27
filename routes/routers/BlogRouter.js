const Router = require("express");
const blogController = require("../../controllers/blogController");
const AuthMiddleware = require("../../middleware/AuthMiddleware");
const router = new Router();

router.get("/get", blogController.get);
router.get("/create", AuthMiddleware, blogController.create);

module.exports = router;