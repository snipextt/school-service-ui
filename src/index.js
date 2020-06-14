import React from "react";
import { render } from "react-dom";
import "./assets/main.css";
import App from "./App";
import Loader from "./Loader";
import * as serviceWorker from "./serviceWorker";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
render(<Loader />, document.getElementById("loader"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
