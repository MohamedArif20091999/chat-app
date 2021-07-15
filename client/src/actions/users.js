import axios from "axios";

export const getAllUsers = () => async (dispatch) => {
  console.log("get all users");
  const { data } = await axios.get("/users/all-users", {
    headers: { Authorization: `Bearer ${localStorage.getItem("jid")}` },
  });
  console.log("ALL USERS:", data);
  dispatch({ type: "ALL_USERS", payload: data });
};

export const getMyDetail = () => async (dispatch) => {
  const { data } = await axios.get("/users/my-detail", {
    headers: { Authorization: `Bearer ${localStorage.getItem("jid")}` },
  });
  console.log("MY DATA:", data);
  dispatch({ type: "MY_DATA", payload: data });
};
