import axios from "axios";

export const getChat = (userId) => async (dispatch) => {
  const { data } = await axios.post(
    "/chat/get-chat/",
    { userId },
    { headers: { Authorization: `Bearer ${localStorage.getItem("jid")}` } }
  );
  console.log(data);
  dispatch({ type: "USER_CHAT", payload: data });
};

export const updateChat = (data) => async (dispatch) => {
  console.log("For update:", data);
  dispatch({ type: "CHAT_UPDATE", payload: data });
};
