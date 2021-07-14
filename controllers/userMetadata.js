const User = require("../models/User");

exports.getUsers = async (req, res) => {
  try {
    await User.find({}, "userName", (err, userData) => {
      if (err) {
        console.log(err);
      } else {
        res.send(userData);
      }
    });
  } catch (err) {
    console.log(err);
  }
};
