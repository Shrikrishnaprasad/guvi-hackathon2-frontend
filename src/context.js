import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loginToken, setLoginToken] = useState("");
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider
      value={{
        loginToken,
        setLoginToken,
        username,
        setUsername
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
