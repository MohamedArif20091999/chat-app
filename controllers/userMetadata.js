const User = require("../models/User");

exports.getUsers = async (req, res) => {
  try {
    await User.find({}, "userName", (err, userData) => {
      if (err) {
        console.log(err);
      } else {
        const userId = res.locals.user.id;
        userData.forEach((user) => console.log(user._id));
        const users = userData.filter((user) => {
          return user._id != userId;
        });
        res.send(users);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getUserDetail = async (req, res) => {
  try {
    await User.findOne(
      { _id: res.locals.user.id },
      "-password",
      (err, userData) => {
        if (err) {
          console.log(err);
        } else {
          console.log(userData);
          res.send(userData);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};
