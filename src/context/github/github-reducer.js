const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS_DATA":
      return {
        ...state,
        userData: action.userData,
        loading: action.loading,
      };
    case "GET_USER_AND_REPOS":
      return {
        ...state,
        user: action.userData.user,
        repos: action.userData.repos,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.loading,
      };
    case "RESET_SEARCH":
      return {
        ...state,
        userData: [],
      };
    default:
      return state;
  }
};

export default githubReducer;
