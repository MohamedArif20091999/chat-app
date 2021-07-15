import axios from "axios";
// import { history } from "../index";
import history from "../history";

export const registerUser = (userName, email, password) => async (dispatch) => {
  console.log(userName, email, password);
  const res = await axios.post("/auth/register", {
    userName: userName,
    email: email,
    password: password,
  });
  console.log(res);
  if (res.data.ok) {
    history.push("/login");
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  const res = await axios.post("/auth/login", {
    email: email,
    password: password,
  });

  if (res.data.status === "success") {
    const token = res.data.token;
    localStorage.setItem("jid", token);
    localStorage.setItem("userId", res.data.user.userId);
    console.log("Success route to home");
    history.push("/home");
  } else {
    console.log("Auth failed");
    dispatch({ type: "AUTH_FAIL", payload: "auth_err" });
  }
};
