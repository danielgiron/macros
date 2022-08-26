//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import TDEECalculator from "./TDEECalculator";
import GoalsCalculator from "./GoalsCalculator";
import "./Home.css";

function Home(props) {
  const [TDEE, setTDEE] = useState(
    JSON.parse(localStorage.getItem("TDEE") || 2000)
  );

  useEffect(() => {
    localStorage.setItem("TDEE", TDEE);
  }, [TDEE]);

  return (
    <div className="Home">
      <h1>Home</h1>
      <TDEECalculator TDEE={TDEE} setTDEE={setTDEE} />
      <GoalsCalculator TDEE={TDEE} setTDEE={setTDEE} />
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
