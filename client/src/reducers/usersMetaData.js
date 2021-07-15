export const usersMetaData = (state = [], action) => {
  switch (action.type) {
    case "ALL_USERS":
      let data = action.payload;
      console.log("FROM REDUCER:", data);
      return action.payload;
    default:
      return state;
  }
};

export const myData = (state = {}, action) => {
  switch (action.type) {
    case "MY_DATA":
      console.log("MY_DATA", action.payload);
      return action.payload;
    default:
      return state;
  }
};
