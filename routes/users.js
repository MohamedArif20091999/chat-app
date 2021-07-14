const express = require("express");
const router = express.Router();
const verifyUser = require("../services/verify-jwt");
const userDataController = require("../controllers/userMetadata");

router.get("/all-users", verifyUser, userDataController.getUsers);

module.exports = router;
