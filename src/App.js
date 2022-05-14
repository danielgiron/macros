import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Header />

      <Main />
    </div>
  );
}

export default App;
