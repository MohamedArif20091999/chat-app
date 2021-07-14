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
