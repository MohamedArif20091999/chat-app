const Message = require("../models/Message");

exports.getChat = async (req, res) => {
  try {
    const fromMe = await Message.find(
      {
        $and: [
          {
            from: res.locals.user.id,
          },
          {
            to: req.body.userId,
          },
        ],
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
        $and: [
          {
            from: req.body.userId,
          },
          {
            to: res.locals.user.id,
          },
        ],
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log("FROM THEM:", data);
        }
      }
    );
    let chats = [...fromMe, ...fromThem];
    const sorted = chats.sort((a, b) => a.createdAt - b.createdAt);
    res.send(sorted);
  } catch (err) {
    console.log(err);
  }
};
