import React, { useState, useEffect } from "react";
import AppContext from "./use-context";

const AppState = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://elaunch-shopall.herokuapp.com/products")
      .then((data) => data.json())
      .then((json) => setData(json));
  }, []);


  return (
    <AppContext.Provider value={[data, setData]}>{props.children}</AppContext.Provider>
  );
};

export default AppState;