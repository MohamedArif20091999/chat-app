import axios from "axios";

export const getAllUsers = () => async (dispatch) => {
  console.log("get all users");
  const { data } = await axios.get("/users/all-users", {
    headers: { Authorization: `Bearer ${localStorage.getItem("jid")}` },
  });
  console.log("ALL USERS:", data);
  dispatch({ type: "ALL_USERS", payload: data });
};
