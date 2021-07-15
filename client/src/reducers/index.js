import { combineReducers } from "redux";
import { usersMetaData, myData } from "./usersMetaData";
import { chat } from "./chat";

export const Auth = (state = "", action) => {
  switch (action.type) {
    case "AUTH_FAIL":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  allUsers: usersMetaData,
  myData,
  chat,
  auth: Auth,
});
