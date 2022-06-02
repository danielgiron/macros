//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import AddMeal from "./AddMeal";
import PieGraphPanel from "./PieGraphPanel";
import BarGraph from "./PieGraphPanel";
// import './TodaysLog.css'

function TodaysLog(props) {
  const { todaysLog } = props;
  const [goals, setGoals] = useState({
    calories: +todaysLog.goals.calories || 0,
    protein: +todaysLog.goals.protein || 0,
    carbs: +todaysLog.goals.carbs || 0,
    fat: +todaysLog.goals.fat || 0,
  });

  const [mealsEaten, setMealsEaten] = useState(todaysLog.mealsEaten || []);

  useEffect(() => {
    todaysLog.macrosConsumed = { calories: 0, protein: 0, carbs: 0, fat: 0 };
    todaysLog.goals = goals;
    todaysLog.mealsEaten = mealsEaten;

    localStorage.setItem("todaysLog", JSON.stringify(todaysLog));
  }, [goals, mealsEaten]);

  useEffect(() => {
    console.log("Meals eaten: ", mealsEaten);
    // console.log("TodaysLog Meals eaten: ", todaysLog.mealsEaten);
  }, [mealsEaten]);

  function handleGoalChange(e) {
    const { name, value } = e.target;
    setGoals({ ...goals, [name]: +value });
  }
  return (
    <div className="FirstSection TodaysLog">
      <div className="Big SectionHeader">Today</div>
      <div className="Graphs">
        <div className="PieChart">
          <PieGraphPanel mealsEaten={mealsEaten} goals={goals} />
        </div>
        <div className="BarChart"></div>
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
      <AddMeal mealsEaten={mealsEaten} setMealsEaten={setMealsEaten} />
    </div>
  );
}
export default TodaysLog;
