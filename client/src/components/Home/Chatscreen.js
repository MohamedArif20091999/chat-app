import react, { useEffect, useState } from "react";
import io from "socket.io-client";

// change it to dotenv
const socket = io.connect("http://localhost:5000");
const Chatscreen = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const userName = "Arif";
  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat", {
      message,
      from: "60eec4931d6ddc418d787fb0",
      to: "60eee66391f94710aea293bc",
    });
    setMessage("");
  };
  useEffect(() => {
    socket.on("chat", (payload) => {
      setChat([...chat, payload]);
    });
  });
  return (
    <div>
      <h1>Chatty app</h1>
      {chat.map((payload, index) => {
        return (
          <p key={index}>
            {payload.message}: <span>id: {payload.userName}</span>
          </p>
        );
      })}
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
};

export default Chatscreen;
