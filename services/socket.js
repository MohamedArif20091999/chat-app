const Message = require("../models/Message");

exports.chatService = async (data) => {
  console.log("FROM chat service:", data);
  const newMessage = new Message({
    from: data.from,
    to: data.to,
    message: data.message,
  });
  await newMessage.save();
};
