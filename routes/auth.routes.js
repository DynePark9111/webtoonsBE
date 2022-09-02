const { Router } = require("express");
const router = Router();

const authController = require("../controllers/auth.controller");
const { checkUser, reCaptcha } = require("../middleware/auth.middleware");

router.post("/signup", reCaptcha, authController.createUser);
router.post("/login", authController.loginUser);
router.get("/logout", authController.logoutUser);
router.get("/check", checkUser, authController.checkUser);

module.exports = router;
