import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchApi} from "../utils/api";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSerachResults] = useState("");
  const [selectCategory, setSelectCategory] = useState(false);
  const [menu, setMenu] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getSelectedCategory(selectCategory);
    // getAppData()
  }, [selectCategory]);

  const getSelectedCategory = (query) => {
    setLoading(true);
    fetchApi(`search/?q=${query}`).then(({contents}) => {
      // console.log(res)
      setSerachResults(contents);
      setLoading(false);
    });
  };

  // const getAppData = (query) =>{
  //   getData(`search/?q=${query}`).then((data)=>{
  //     // console.log(data)
  //   })
  // }

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        selectCategory,
        setSelectCategory,
        toggle,
        setToggle,
        menu,
        setMenu
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useYourContext = () => {
  return useContext(AppContext);
};

export { AppContext, ContextProvider, useYourContext };
