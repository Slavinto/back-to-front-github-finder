import { createContext, useReducer } from "react";

import githubReducer from "./github-reducer.js";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    userData: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    startLoading();
    const response = await fetch(`${GITHUB_URL}/users`);
    const data = await response.json();

    dispatch({
      type: "GET_USER_DATA",
      userData: data,
      loading: false,
    });

    function startLoading() {
      dispatch({
        type: "START_LOADING",
      });
    }
  };

  return (
    <GithubContext.Provider
      value={{
        userData: state.userData,
        loading: state.loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
// , {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
//   },
// }
