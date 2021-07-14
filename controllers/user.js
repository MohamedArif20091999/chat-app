const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const saltRounds = 10;

exports.register = (req, res) => {
  console.log("REQ BODY:", req.body);
  const { userName, email, password } = req.body;
  console.log(req.data);

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

exports.logIn = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  console.log("LOGIN CREDS:", email, password);
  await User.findOne(
    {
      email: email,
    },
    (err, foundUser) => {
      if (err) {
        console.log(err);
      } else {
        if (foundUser) {
          bcrypt.compare(password, foundUser.password, (err, result) => {
            if (result === true) {
              let token = jwt.sign(
                {
                  id: foundUser._id,
                },
                process.env.JWT_SECRET,
                {
                  expiresIn: "7d",
                }
              );
              // console.log('User credentials are valid!');
              console.log("FOUND USER:", token, foundUser);
              // res.cookie("jid", token, {
              //   httpOnly: true,
              // });
              return res.send({
                status: "success",
                message: "Login Successful.",
                token: token,
                user: {
                  userId: foundUser._id,
                  userName: foundUser.userName,
                },
              });
            } else {
              return res.send({
                status: "failure",
                message: "Invalid credentials.",
              });
              // console.log('The username or password was incorrect.');
            }
          });
        } else {
          return res.send({
            status: "failure",
            message: "Invalid credentials.",
          });
          // console.log('The username or password was incorrect.');
        }
      }
    }
  );
};
