import "./assets/index.css";
import "./assets/index.less";
import React from "react";
import * as ReactDom from "react-dom";
import App from "./app";

ReactDom.render(<App />, window.document.getElementById("react-root"));
