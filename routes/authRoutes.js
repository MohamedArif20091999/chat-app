const express = require("express");
const router = express.Router();
const usersController = require("../controllers/user");

router.post("/register", usersController.register);
router.post("/login", usersController.logIn);

module.exports = router;
