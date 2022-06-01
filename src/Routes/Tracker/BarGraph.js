//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import BarChart from "./BarChart.js";
import d3 from "d3";
import c3 from "c3";
import "c3/c3.css";

// import './BarGraph.css'

function BarGraph(props) {
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

  //   console.log("calories: ", calories);
  //   console.log("protein: ", protein);
  //   console.log("carbs: ", carbs);
  //   console.log("fat: ", fat);
  //   console.log("Meals: ", mealsEaten);

  return (
    <div className="BarGraph">
      <BarChart data={[33, 33, 33]} />
      {/* <div>Calories: {calories}</div>
      <div>Protein: {protein}</div>
      <div>Carbs: {carbs}</div>
      <div>Fat: {fat}</div> */}
    </div>
  );
}
export default BarGraph;
