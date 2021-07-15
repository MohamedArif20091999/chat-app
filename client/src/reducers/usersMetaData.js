export const usersMetaData = (state = [], action) => {
  switch (action.type) {
    case "ALL_USERS":
      let data = action.payload;
      return action.payload;
    default:
      return state;
  }
};

export const myData = (state = {}, action) => {
  switch (action.type) {
    case "MY_DATA":
      return action.payload;
    default:
      return state;
  }
};
