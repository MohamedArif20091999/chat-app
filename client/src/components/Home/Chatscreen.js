import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateChat } from "../../actions";
import io from "socket.io-client";
import { Button, notification } from "antd";
import "./home.css";

import { SmileOutlined } from "@ant-design/icons";

// change it to dotenv

const Chatscreen = ({ selectedUser, selectedUserName, chat, updateState }) => {
  const socket = io.connect("http://localhost:5000");
  socket.emit("join", { userId: localStorage.getItem("userId") });

  let dispatch = useDispatch();
  let me = useSelector((state) => state.myData);

  const [message, setMessage] = useState("");
  const [chatItems, setChatItems] = useState(chat);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat", {
      message,
      from: me.email,
      to: selectedUser,
    });
    setMessage("");
  };
  useEffect(() => {
    socket.on("chat", (payload) => {
      {
        openNotification(payload);
      }
      console.log("PAYLOOD:", payload.msg);
      dispatch(updateChat(payload.msg));
      setChat(payload.msg);
      console.log(payload);
    });
  }, []);
  const setChat = (data) => {
    setChatItems([...chatItems, data]);
    console.log("Experiment:", chatItems);
  };

  const update = (data) => {
    dispatch(updateChat(data));
  };

  const openNotification = (payload) => {
    notification.open({
      message: "From: " + payload.msg.from,
      description: "Message: " + payload.msg.message,
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };

  const renderItem = () => {
    if (selectedUser) {
      return (
        <div>
          <div className="chat-header">
            <h1 className="userName">{selectedUserName}</h1>
          </div>
          {chat.map((item) => (
            <div>
              <p>
                {" "}
                {me._id == item.from ? "You: " : " "}
                <span>{" " + item.message}</span>{" "}
              </p>
            </div>
          ))}
          <form onSubmit={sendChat}>
            <input
              type="text"
              name="chat"
              placeholder="send text"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      );
    }
    return <h1>Welcome</h1>;
  };

  return <div>{renderItem()}</div>;
};

export default Chatscreen;
