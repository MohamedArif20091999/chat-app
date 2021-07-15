export const chat = (state = [], action) => {
  switch (action.type) {
    case "USER_CHAT":
      return action.payload;
    case "CHAT_UPDATE":
      return [...state, action.payload];
    default:
      return state;
  }
};
