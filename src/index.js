import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Stepper from "./components/Organisms/Stepper/Stepper"

ReactDOM.render(
  <Router primary={false}>
    <Stepper type={""} data={[{title:"Titulo1", image:"Porque_ME.jpg"},{title:"Titulin 2", image:"Porque_ME.jpg"},{title:"Titulo1", image:"Porque_ME.jpg"},{title:"Titulin 2", image:"Porque_ME.jpg"}]}/>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
