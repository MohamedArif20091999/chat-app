import { combineReducers } from "redux";
import { usersMetaData, myData } from "./usersMetaData";
import { chat } from "./chat";

export const test = (state = "Hello", action) => {
  return "test";
};

export default combineReducers({
  test,
  allUsers: usersMetaData,
  myData,
  chat,
});
