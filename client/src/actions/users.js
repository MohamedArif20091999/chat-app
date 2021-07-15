import axios from "axios";

export const getAllUsers = () => async (dispatch) => {
  const { data } = await axios.get("/users/all-users", {
    headers: { Authorization: `Bearer ${localStorage.getItem("jid")}` },
  });
  dispatch({ type: "ALL_USERS", payload: data });
};

export const getMyDetail = () => async (dispatch) => {
  const { data } = await axios.get("/users/my-detail", {
    headers: { Authorization: `Bearer ${localStorage.getItem("jid")}` },
  });
  dispatch({ type: "MY_DATA", payload: data });
};
