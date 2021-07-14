const User = require("../models/User");
const bcrypt = require("bcrypt");

const saltRounds = 10;

exports.register = (req, res) => {
  const { userName, email, password } = req.body;
  console.log(req);

  User.findOne(
    {
      email: email,
    },
    (err, foundEmail) => {
      if (!err) {
        if (foundEmail) {
          console.log("User already exist");
          return res.send({ ok: false, status: "UserName already exists" });
        } else {
          bcrypt.hash(password, saltRounds, (err, hash) => {
            const newUser = new User({
              userName: userName,
              email: email,
              password: hash,
            });
            newUser.save((err) => {
              if (err) {
                console.log(err);
              } else {
                console.log("User registered" + newUser);
                return res.send({
                  ok: true,
                  status: "User added",
                  user: { email: newUser.email, userName: newUser.userName },
                });
              }
            });
          });
        }
      }
    }
  );
};
