//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import PieGraph from "./PieGraph.js";

function PieGraphPanel(props) {
  const { mealsEaten } = props;

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
