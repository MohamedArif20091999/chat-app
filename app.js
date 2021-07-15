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

// ROUTES
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");

// APP CONFIG

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/chat", chatRoutes);

io.on("connection", (socket) => {
  console.log("Socket is activated");

  socket.on("chat", async (payload) => {
    let data = await chatService(payload);
    console.log("return from cs:", data);
    io.sockets.in(payload.to, payload.from).emit("chat", { msg: data });
  });

  socket.on("join", (data) => {
    socket.join(data.userId);
  });
});

server.listen(process.env.PORT, () => {
  console.log("server started");
});
