import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import { setValues, changeBG } from "./background";

import "./App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  useEffect(() => {
    console.log("loaded");
    const elem = document.querySelector(".colorMesh");
    elem.style.backgroundColor = "#e7a247";
    const points = setValues();

    setInterval(() => {
      changeBG(elem, points);
    }, 50);
  }, []);

  return (
    <div className="App">
      <Header />

      <Main />
      <div className="colorMesh"></div>

    </div>
  );
}

export default App;
