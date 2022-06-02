//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import d3 from "d3";
import c3 from "c3";
import "c3/c3.css";
import PieGraph from "./PieGraph.js";

// import './BarGraph.css'

function PieGraphPanel(props) {
  const { mealsEaten, goals } = props;

  let calories = 0;
  let protein = 0;
  let carbs = 0;
  let fat = 0;

  for (let meal of mealsEaten) {
    calories += meal.mealCalories;
    protein += meal.mealProtein;
    carbs += meal.mealCarbs;
    fat += meal.mealFat;
  }

  return (
    <div className="PieGraphPanel">
      <div className="SectionHeader">Calorie Composition</div>
      <PieGraph name="TodayPie" data={[protein * 4, carbs * 4, fat * 9]} />
    </div>
  );
}
export default PieGraphPanel;
