import React, { useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();


// getting the children and that is app component here
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("Batman");
  const { isLoading, isError, movie } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };