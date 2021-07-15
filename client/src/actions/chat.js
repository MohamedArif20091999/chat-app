import axios from "axios";

export const getChat = (userId) => async (dispatch) => {
  const { data } = await axios.post(
    "/chat/get-chat/",
    { userId },
    { headers: { Authorization: `Bearer ${localStorage.getItem("jid")}` } }
  );
  dispatch({ type: "USER_CHAT", payload: data });
};

export const updateChat = (data) => async (dispatch) => {
  dispatch({ type: "CHAT_UPDATE", payload: data });
};
