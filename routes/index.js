const Router = require("express");
// const authMiddleware = require("../middleware/authMiddleware");
const router = new Router();
const UploadRouter = require("./routers/UploadRouter");
const BlogRouter = require("./routers/BlogRouter");
const BansRouter = require("./routers/BansRouter");
const CommsRouter = require("./routers/CommsRouter");
const AdminsRouter = require("./routers/AdminsRouter");
const VipRouter = require("./routers/VipRouter");
const ServersRouter = require("./routers/ServersRouter");
const ShopRouter = require("./routers/ShopRouter");
const SearchRouter = require("./routers/SearchRouter");
// const AvatarRouter = require("./routers/AvatarRouter");

router.use("/upload", UploadRouter);
router.use("/blog", BlogRouter);
router.use("/bans", BansRouter);
router.use("/comms", CommsRouter);
router.use("/admins", AdminsRouter);
router.use("/premiums", VipRouter);
router.use("/servers", ServersRouter);
router.use("/shop", ShopRouter);
router.use("/search/", SearchRouter);
// router.use("/avatar", AvatarRouter);

module.exports = router;
