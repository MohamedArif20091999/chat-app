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
const chatRoutes = require("./routes/chatRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/chat", chatRoutes);

io.on("connection", (socket) => {
  // console.log(socket);
  console.log("Socket is activated");

  socket.on("chat", async (payload) => {
    let data = await chatService(payload);
    console.log("return from cs:", data);
    // io.emit("chat", payload);
    // socket.broadcast.to(payload.to).emit("sendMsg", {
    //   msg: payload.message,
    // });
    io.sockets.in(payload.to, payload.from).emit("chat", { msg: data });
  });

  console.log(
    "PLEASE WORK:"
    // io.sockets.in(payload.to).emit("chat", { msg: payload.message })
  );

  socket.on("join", (data) => {
    console.log("ON JOIN: ", data);
    socket.join(data.userId);
  });
});

server.listen(process.env.PORT, () => {
  console.log("server started");
});
