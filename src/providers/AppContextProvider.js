import React from "react";

const DEFAULT_STATE = {
  title: "App todo",
};

export const AppContext = React.createContext({
  title: "React Todo App",
});

const AppContextProvider = ({ children }) => (
  <AppContext.Provider value={DEFAULT_STATE}>{children}</AppContext.Provider>
);

export default AppContextProvider;
