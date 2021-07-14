const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connection established.");
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});

module.exports = mongoose;
