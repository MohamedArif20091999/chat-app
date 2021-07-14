import { combineReducers } from "redux";

export const test = (state = "Hello", action) => {
  return "test";
};

export default combineReducers({
  test,
});
