//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
// import './TodaysLog.css'

function TodaysLog(props) {
  const { todaysLog } = props;
  const [goals, setGoals] = useState({
    calories: +todaysLog.goals.calories || 0,
    protein: +todaysLog.goals.protein || 0,
    carbs: +todaysLog.goals.carbs || 0,
    fat: +todaysLog.goals.fat || 0,
  });

  const [macrosConsumed, setMacrosConsumed] = useState({
    calories: +todaysLog.macrosConsumed.calories || 0,
    protein: +todaysLog.macrosConsumed.protein || 0,
    carbs: +todaysLog.macrosConsumed.carbs || 0,
    fat: +todaysLog.macrosConsumed.fat || 0,
  });
  const [mealsEaten, setMealsEaten] = useState(todaysLog.mealsEaten || []);

  useEffect(() => {
    todaysLog.macrosConsumed = macrosConsumed;
    todaysLog.goals = goals;
    todaysLog.mealsEaten = mealsEaten;
    localStorage.setItem("todaysLog", JSON.stringify(todaysLog));
  }, [goals, macrosConsumed, mealsEaten]);

  function handleGoalChange(e) {
    const { name, value } = e.target;
    setGoals({ ...goals, [name]: +value });
  }
  return (
    <div className="FirstSection TodaysLog">
      <div className="Big SectionHeader">Today</div>
      <div className="Graphs">
        <div className="PieChart">Pie</div>
        <div className="BarChart">Bar</div>
      </div>
      <div className="SetGoals">
        <div className="SectionHeader">Set Goals</div>
        <div className="SetGoalsForm">
          <div className="SetGoalsFormInput Calories">
            <label htmlFor="caloriesGoalInput">Calories</label>
            <input
              onChange={handleGoalChange}
              id="caloriesGoalInput"
              name="calories"
              type={"number"}
              value={goals.calories}
            />
          </div>
          <div className="SetGoalsFormInput Protein">
            <label htmlFor="proteinGoalInput">Protein</label>
            <input
              onChange={handleGoalChange}
              id="proteinGoalInput"
              name="protein"
              type={"number"}
              value={goals.protein}
            />
          </div>
          <div className="SetGoalsFormInput Carbs">
            <label htmlFor="carbsGoalInput">Carbs</label>
            <input
              onChange={handleGoalChange}
              id="carbsGoalInput"
              name="carbs"
              type={"number"}
              value={goals.carbs}
            />
          </div>
          <div className="SetGoalsFormInput Fat">
            <label htmlFor="fatGoalInput">Fat</label>
            <input
              onChange={handleGoalChange}
              id="fatGoalInput"
              name="fat"
              type={"number"}
              value={goals.fat}
            />
          </div>
        </div>
      </div>
      <div className="TodaysMealsContainer">
        <div className="SectionHeader">Add Meal</div>
        <div className="AddMealSection">
          <button className="AddMealButton">+</button>
          <div className="Meal">Meal 1</div>
          <div className="Meal">Meal 2</div>
          <div className="Meal">Meal 3</div>
        </div>
      </div>
    </div>
  );
}
export default TodaysLog;
