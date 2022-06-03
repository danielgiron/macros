//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import "./GoalsGraph.css";

function GoalsGraph(props) {
  const { goals, mealsEaten, isVertical } = props;
  let caloriesConsumed = 0;
  let proteinConsumed = 0;
  let carbsConsumed = 0;
  let fatConsumed = 0;

  for (let meal of mealsEaten) {
    caloriesConsumed += meal.mealCalories;
    proteinConsumed += meal.mealProtein;
    carbsConsumed += meal.mealCarbs;
    fatConsumed += meal.mealFat;
  }

  let calorieProgress = (caloriesConsumed / goals.calories) * 100;
  let proteinProgress = (proteinConsumed / goals.protein) * 100;
  let carbsProgress = (carbsConsumed / goals.carbs) * 100;
  let fatProgress = (fatConsumed / goals.fat) * 100;

  if (calorieProgress > 100) {
    calorieProgress = 100;
  }
  if (proteinProgress > 100) {
    proteinProgress = 100;
  }
  if (carbsProgress > 100) {
    carbsProgress = 100;
  }
  if (fatProgress > 100) {
    fatProgress = 100;
  }

  return (
    <div className="GoalsGraph">
      <div className="MacroBar Calories">
        <div className="MacroName">Calories</div>
        <div className="BarProgress">
          {`${Math.round(caloriesConsumed)} / ${goals.calories}`}
        </div>
        <div className="BarValue">{`${calorieProgress.toFixed(0)}%`}</div>
        <div className="Bar" style={{ width: `${calorieProgress}%` }}>
          .
        </div>
      </div>

      <div className="MacroBar Protein">
        <div className="MacroName">Protein</div>
        <div className="BarProgress">
          {`${Math.round(proteinConsumed)}g / ${goals.protein}g`}
        </div>
        <div className="BarValue">{`${proteinProgress.toFixed(0)}%`}</div>
        <div className="Bar" style={{ width: `${proteinProgress}%` }}>
          .
        </div>
      </div>

      <div className="MacroBar Carbs">
        <div className="MacroName">Carbs</div>
        <div className="BarProgress">
          {`${Math.round(carbsConsumed)}g / ${goals.carbs}g`}
        </div>
        <div className="BarValue">{`${carbsProgress.toFixed(0)}%`}</div>
        <div className="Bar" style={{ width: `${carbsProgress}%` }}>
          .
        </div>
      </div>

      <div className="MacroBar Fat">
        <div className="MacroName">Fat</div>
        <div className="BarProgress">
          {`${Math.round(fatConsumed)}g / ${goals.fat}g`}
        </div>
        <div className="BarValue">{`${fatProgress.toFixed(0)}%`}</div>
        <div className="Bar" style={{ width: `${fatProgress}%` }}>
          .
        </div>
      </div>
    </div>
  );
}
export default GoalsGraph;
