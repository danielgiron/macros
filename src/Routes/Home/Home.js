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
      <div className="PageInfo">
        <div className="Title">MacrOS</div>
        <div className="Subtitle">Macronutrient Tracking</div>
        <div className="Body">
          <p>Welcome to MacrOS! With MacrOS you can:</p>
          <ul>
            <li>Calculate your daily macronutrient needs</li>
            <li>
              Look up nutritional information for countless foods and items
            </li>
            <li>Create your own recipes using saved nutritional information</li>
            <li>
              View the automatically generated nutritional information for
              recipes
            </li>
            <li>Keep a daily log of your macronutrients</li>
            <li>Review your history of logs with graphs and charts</li>
          </ul>
          <p>
            To get started, use the TDEE and Macronutrient Calculators on this
            page to get an idea of what your daily requirements are. Then head
            over to the Items page to look for foods you regularly consume and
            save them to your local collection. From there, switch over to the
            Recipes page where you can create recipes using your saved items and
            view the nutritional information for the entire recipe. Once done,
            open the Tracker page and toy around with all the fun charts and
            graphs displaying your information!
          </p>
          <p>
            On all pages there will be options to use sample data so you can
            skip the work and see the app's full functionality.
          </p>
        </div>
      </div>

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
