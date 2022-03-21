const express = require("express");
const authController = require("../controllers/authController");
const viewController = require("../controllers/viewController");
const router = express.Router();

router.get("/login", viewController.getLogin);
router.get("/signup", viewController.getSignup);
router.get("/", viewController.getHome);
router.get("/events", viewController.getEvents);
module.exports = router;
