const Router = require("express");
const ServersController = require("../../controllers/ServersController");
const issetServerMiddleware = require("../../middleware/issetServerMiddleware");
const router = new Router();

router.get("/:server/ranks", issetServerMiddleware, (...args) =>
  ServersController.ranks(...args)
);
router.get("/:server/player/:steamID", issetServerMiddleware, (...args) =>
  ServersController.player(...args)
);

router.get(
  "/:server/currentplayer/:steamID",
  issetServerMiddleware,
  (...args) => ServersController.allranks(...args)
);
router.get("/:server/clutch/:steamID", issetServerMiddleware, (...args) =>
  ServersController.clutch(...args)
);
router.get("/:server/geoip/:steamID", issetServerMiddleware, (...args) =>
  ServersController.geoip(...args)
);
router.get("/:server/hits/:steamID", issetServerMiddleware, (...args) =>
  ServersController.hits(...args)
);
router.get("/:server/maps/:steamID", issetServerMiddleware, (...args) =>
  ServersController.maps(...args)
);
router.get("/:server/uk/:steamID", issetServerMiddleware, (...args) =>
  ServersController.uk(...args)
);
router.get("/:server/weapons/:steamID", issetServerMiddleware, (...args) =>
  ServersController.weapons(...args)
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
