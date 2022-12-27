import { createContext, useReducer } from "react";
import alertReducer from "./alert-reducer";
const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initState = null;
  const [state, dispatch] = useReducer(alertReducer, initState);

  const setAlert = (msg, type) => {
    console.log(msg, type);
    dispatch({ type: "SET_ALERT", alert: { msg, type } });
    setTimeout(() => {
      dispatch({ type: "REMOVE_ALERT" });
    }, 3000);
  };
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
