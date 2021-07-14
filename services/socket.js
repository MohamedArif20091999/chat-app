exports.server = require("http").createServer(app);
exports.io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(socket);
  console.log("Socket is activated");

  socket.on("chat", (payload) => {
    console.log("PAYLOAD:", payload);
    io.emit("chat", payload);
  });
});
