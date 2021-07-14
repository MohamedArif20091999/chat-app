const express = require("express");
const router = express.Router();
const userDataController = require("../controllers/userMetadata");

router.get("/all-users", userDataController.getUsers);

module.exports = router;
