const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return {
        ...state,
        userData: action.userData,
        loading: action.loading,
      };
    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default githubReducer;
