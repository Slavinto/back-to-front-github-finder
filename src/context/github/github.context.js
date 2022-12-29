import { createContext, useReducer } from "react";

import githubReducer from "./github-reducer.js";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    userData: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
