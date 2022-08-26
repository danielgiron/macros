//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import TDEECalculator from "./TDEECalculator";
import "./Home.css";

function Home(props) {
  return (
    <div className="Home">
      <h1>Home</h1>
      <TDEECalculator />
    </div>
  );
}
export default Home;
