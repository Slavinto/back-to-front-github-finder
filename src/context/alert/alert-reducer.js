const alertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.data;
    case "REMOVE_ALERT":
      return null;
  }
};

export default alertReducer;
