import { createContext, useReducer } from "react";

import githubReducer from "./github-reducer.js";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    userData: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const resetSearch = () => {
    dispatch({
      type: "RESET_SEARCH",
      initState: initialState,
    });
  };

  const searchUsers = async (text) => {
    try {
      startLoading();
      const params = new URLSearchParams({
        q: text,
      });

      const response = await fetch(
        `${GITHUB_URL}/search/users?${params}`
        // , {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        //   },
        // }
      );
      const { items } = await response.json();

      dispatch({
        type: "GET_USERS_DATA",
        userData: items,
        loading: false,
      });

      function startLoading() {
        dispatch({
          type: "START_LOADING",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getUser = async (login) => {
    try {
      startLoading();

      const response = await fetch(`${GITHUB_URL}/users/${login}`);
      const data = await response.json();

      dispatch({
        type: "GET_USER",
        user: data,
        loading: false,
      });

      function startLoading() {
        dispatch({
          type: "START_LOADING",
        });
      }
    } catch (err) {
      console.error(err);
      window.location = "./notfound";
    }
  };

  return (
    <GithubContext.Provider
      value={{
        userData: state.userData,
        user: state.user,
        loading: state.loading,
        searchUsers,
        getUser,
        resetSearch,
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
