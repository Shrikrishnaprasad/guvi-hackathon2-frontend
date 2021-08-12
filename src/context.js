import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loginToken, setLoginToken] = useState("");
  const [username, setUsername] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const headersList = {
    Accept: "*/*",
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTNkZDg1ZGQ2MWFhMGQ1YjRhYzVkMyIsImlhdCI6MTYyODcwNDAyMX0.u_mjLG4hgTWFFjl4UVViU_kRmeEC3841h1jlsTe6xek"
  };
  function getProduct() {
    fetch("https://node-app-krishna.herokuapp.com/product", {
      method: "GET",
      headers: headersList
    })
      .then((data) => data.json())
      .then((data) => {
        const count = data.filter((product) => product.isCart).length;
        setCartCount(count);
      })
      .catch((e) => console.log(e));
  }
  return (
    <AppContext.Provider
      value={{
        loginToken,
        setLoginToken,
        username,
        setUsername,
        cartCount,
        setCartCount,
        getProduct
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
