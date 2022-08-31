const Router = require("express");
const ServersController = require("../../controllers/ServersController");
const issetServerMiddleware = require("../../middleware/issetServerMiddleware");
const router = new Router();

router.get("/:server/ranks", issetServerMiddleware, (...args) =>
  ServersController.ranks(...args)
);
router.get("/:server/player", issetServerMiddleware, (...args) =>
  ServersController.player(...args)
);
router.get("/:server/count", issetServerMiddleware, (...args) =>
  ServersController.count(...args)
);
router.get("/:server/info", issetServerMiddleware, (...args) =>
  ServersController.monitoring(...args)
);
router.get("/:server/players", issetServerMiddleware, (...args) =>
  ServersController.monitoring_players(...args)
);

module.exports = router;
