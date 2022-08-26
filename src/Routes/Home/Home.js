//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import TDEECalculator from "./TDEECalculator";
import GoalsCalculator from "./GoalsCalculator";
import "./Home.css";

function Home(props) {
  return (
    <div className="Home">
      <h1>Home</h1>
      <TDEECalculator />
      <GoalsCalculator />
      <p className="disclaimer">
        Disclaimer: This site is not intended to replace the guidance of a
        doctor or any medical professional and is meant for informational
        purposes only. Follow up with your doctor before making any changes to
        your health or diet.
      </p>
    </div>
  );
}
export default Home;
