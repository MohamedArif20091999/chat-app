// const express = require("express");
const app = require("express")();
const server = require("http").createServer(app);
const socketio = require("socket.io")(server);

socketio.on("connection", (socket) => {
  console.log(socket);
});

server.listen(5000, () => {
  console.log("server started");
});
