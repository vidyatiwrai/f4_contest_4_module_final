
import store from "./Component/store";
import React from "react";
import App from "./App";
import  ReactDOM  from "react-dom";
import { Provider } from "react-redux";
import   "./App.css";

const Hello=()=>{
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}
ReactDOM.render(<Hello/>,document.getElementById("root"))
