const Router = require("express");
// const authMiddleware = require("../middleware/authMiddleware");
const router = new Router();
const UploadRouter = require("./routers/UploadRouter");
const BlogRouter = require("./routers/BlogRouter");
const BansRouter = require("./routers/BansRouter");
const MutesRouter = require("./routers/MutesRouter");
const VipRouter = require("./routers/VipRouter");
const ServersRouter = require("./routers/ServersRouter");
const ShopRouter = require("./routers/ShopRouter");

router.use("/upload", UploadRouter);
router.use("/blog", BlogRouter);
router.use("/bans", BansRouter);
router.use("/mutes", MutesRouter);
router.use("/vip", VipRouter);
router.use("/servers", ServersRouter);
router.use("/shop", ShopRouter);

module.exports = router;
