const { Router } = require("express");
const router = Router();

const newController = require("../controllers/newWebtoon.controller");

router.get("/", newController.getNewWebtoons);

module.exports = router;
