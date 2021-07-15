const Message = require("../models/Message");

exports.getChat = (req, res) => {
  try {
    console.log("fetch all chat");
    console.log(req.body.userId);
    Message.find(
      { $or: [{ from: req.body.userId }, { to: res.locals.user.id }] },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.send(data);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};
