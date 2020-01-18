import "./assets/index.css";
import "./assets/index.less";
import React from "react";
import * as ReactDom from "react-dom";
let a = 123;
let c = 456;
ReactDom.render(
  <div>
    {a}
    {c}
  </div>,
  window.document.getElementById("react-root")
);
