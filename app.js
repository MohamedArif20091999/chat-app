// const express = require("express");
const app = require("express")();
const bodyParser = require("body-parser");
require("./services/db");
require("dotenv").config();
const server = require("http").createServer(app);
const socketio = require("socket.io")(server);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

socketio.on("connection", (socket) => {
  console.log(socket);
});

server.listen(process.env.PORT, () => {
  console.log("server started");
});
