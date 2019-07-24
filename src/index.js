import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./Calculator";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <h1>Calculadora</h1>
    <Calculator />
  </>,
  rootElement
);
