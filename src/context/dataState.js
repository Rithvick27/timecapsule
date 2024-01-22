import dataContext from "./dataContext";
import { useState } from "react";
const DataState = (props) => {
  const { data, setdata } = useState([
    { text: "hieeeee", date: "20-02-2024" },
    { text: "hieeeee", date: "20-02-2024" }

]);

  return (
    <dataContext.Provider value={{ data, setdata }}>
      {props.children}
    </dataContext.Provider>
  );
};
export default DataState;
