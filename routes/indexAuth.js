const Router = require("express");
const AuthController = require("../controllers/AuthController");
const AuthMiddleware = require("../middleware/AuthMiddleware");
const router = new Router();

router.use("/login", AuthController.auth)
router.use("/handle", AuthController.check)
router.use("/refresh", AuthMiddleware, AuthController.refresh)

module.exports = router;