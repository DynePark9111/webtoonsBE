const { Router } = require("express");
const router = Router();

const newController = require("../controllers/newWebtoon.controller");
const { checkUser } = require("../middleware/auth.middleware");

router.get("/", newController.getNewWebtoons);
router.get("/bookmark", checkUser, newController.getBookmarked);
router.get("/watchlater", checkUser, newController.getWatchLater);
router.get("/liked", checkUser, newController.getLiked);

module.exports = router;
