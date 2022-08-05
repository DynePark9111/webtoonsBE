const { Router } = require("express");
const router = Router();

const userController = require("../controllers/user.controller");
const { checkUser } = require("../middleware/auth.middleware");

router.get("/", checkUser, userController.getUser);
router.patch("/bookmark", checkUser, userController.patchBookmark);
router.patch("/watchlater", checkUser, userController.patchWatchLater);
router.patch("/liked", checkUser, userController.patchLiked);

module.exports = router;
