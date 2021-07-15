const Message = require("../models/Message");

exports.getChat = async (req, res) => {
  try {
    console.log("fetch all chat");
    console.log(req.body.userId);
    // Message.find(
    //   { $or: [{ from: req.body.userId }, { to: res.locals.user.id }] },
    //   (err, data) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log("CHAT:", data);
    //       res.send(data);
    //     }
    //   }
    // );
    const fromMe = await Message.find(
      {
        $and: [{ from: res.locals.user.id }, { to: req.body.userId }],
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log("FROM ME:", data);
        }
      }
    );
    const fromThem = await Message.find(
      {
        $and: [{ from: req.body.userId }, { to: res.locals.user.id }],
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log("FROM THEM:", data);
        }
      }
    );
    console.log([...fromMe, ...fromThem]);
    let chats = [...fromMe, ...fromThem];
    const sorted = chats.sort((a, b) => a.createdAt - b.createdAt);
    console.log(sorted);
    res.send(sorted);
  } catch (err) {
    console.log(err);
  }
};
