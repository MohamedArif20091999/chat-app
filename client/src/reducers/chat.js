export const chat = (state = [], action) => {
  switch (action.type) {
    case "USER_CHAT":
      return action.payload;
    case "CHAT_UPDATE":
      console.log("Updated reducer", [...state, action.payload]);
      return [...state, action.payload];
    default:
      return state;
  }
};
