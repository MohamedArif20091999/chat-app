const express = require("express");
const app = require("express")();
const bodyParser = require("body-parser");
require("./services/db");
require("dotenv").config();
const { chatService } = require("./services/socket");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/authRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

io.on("connection", (socket) => {
  // console.log(socket);
  console.log("Socket is activated");

  socket.on("chat", (payload) => {
    chatService(payload);
    io.emit("chat", payload);
  });
});

server.listen(process.env.PORT, () => {
  console.log("server started");
});
