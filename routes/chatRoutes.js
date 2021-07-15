const express = require("express");
const router = express.Router();
const verifyUser = require("../services/verify-jwt");
const chatsController = require("../controllers/chat");

router.post("/get-chat", verifyUser, chatsController.getChat);

module.exports = router;
