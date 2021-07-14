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
