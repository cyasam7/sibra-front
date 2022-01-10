import React from "react";
import ReactDOM from "react-dom";
import { routerMain } from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/Auth";
import { initAxios } from "./Helpers/axiosHelper";
initAxios();
ReactDOM.render(<AuthProvider>{routerMain}</AuthProvider>, document.getElementById("root"));

reportWebVitals();
