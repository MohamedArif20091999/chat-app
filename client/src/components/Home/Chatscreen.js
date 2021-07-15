import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateChat } from "../../actions";
import io from "socket.io-client";

// change it to dotenv

const Chatscreen = ({ selectedUser, chat, updateState }) => {
  const socket = io.connect("http://localhost:5000");
  socket.emit("join", { userId: localStorage.getItem("userId") });

  let dispatch = useDispatch();
  let me = useSelector((state) => state.myData);

  const [message, setMessage] = useState("");
  // const [newChat, setNewChat] = useState([]);
  const [chatItems, setChatItems] = useState(chat);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat", {
      message,
      from: me._id,
      to: selectedUser,
    });
    setMessage("");
  };
  useEffect(() => {
    socket.on("chat", (payload) => {
      console.log("PAYLOOD:", payload.msg);
      // update(payload.msg);
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

  const renderItem = () => {
    if (selectedUser) {
      return (
        <div>
          <h1>{selectedUser}</h1>

          {chat.map((item) => (
            <p> {item.message} </p>
          ))}
        </div>
      );
    }
    return <h1>Welcome</h1>;
  };

  return (
    <div>
      {renderItem()}
      {/* <h1>{chat[0]}</h1> */}
      {/* {chat.map((payload, index) => {
        return (
          <p> {payload.message} </p>
          // <p key={index}>
          //   {payload.message}: <span>id: {payload.userName}</span>
          // </p>
        );
      })} */}
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
