//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { generateLogList } from "./TrackerUtils";
import PieGraph from "./PieGraph";
import GoalsGraph from "./GoalsGraph";
// import './PreviousLogs.css'

function PreviousLogs(props) {
  const { previousLogs } = props;
  // const logsReversed = previousLogs.reverse();
  //   previousLogs = previousLogs.reverse();

  const [activeLog, setActiveLog] = useState();
  let protein = 0;
  let carbs = 0;
  let fat = 0;
  let calories = 0;

  const logList = generateLogList(previousLogs, activeLog, setActiveLog);
  let ItemsConsumed;
  let goals;

  if (activeLog) {
    ItemsConsumed = activeLog.mealsEaten.map((meal, index) => {
      return (
        <li key={index} className="ItemEntry">
          {meal.mealName}
        </li>
      );
    });

    protein = activeLog.macrosConsumed.protein;
    carbs = activeLog.macrosConsumed.carbs;
    fat = activeLog.macrosConsumed.fat;
    calories = activeLog.macrosConsumed.calories;

    const macroProgress = {
      calories: Math.round(
        (activeLog.macrosConsumed.calories / activeLog.goals.calories) * 100
      ),
      protein: Math.round(
        (activeLog.macrosConsumed.protein / activeLog.goals.protein) * 100
      ),
      carbs: Math.round(
        (activeLog.macrosConsumed.carbs / activeLog.goals.carbs) * 100
      ),
      fat: Math.round(
        (activeLog.macrosConsumed.fat / activeLog.goals.fat) * 100
      ),
    };

    goals = (
      <div className="GoalsContainer">
        <div className="Macro Calories">
          <div className="MacroLabel">Calories • {macroProgress.calories}%</div>
          <div
            className="MacroPercent"
            style={{ width: `${macroProgress.calories}%` }}
          >
            {" "}
          </div>
        </div>

        <div className="Macro Protein">
          <div className="MacroLabel">Protein • {macroProgress.protein}%</div>
          <div
            className="MacroPercent"
            style={{ width: `${macroProgress.protein}%` }}
          >
            {" "}
          </div>
        </div>

        <div className="Macro Carb">
          <div className="MacroLabel">Carb • {macroProgress.carbs}%</div>
          <div
            className="MacroPercent"
            style={{ width: `${macroProgress.carbs}%` }}
          >
            {" "}
          </div>
        </div>

        <div className="Macro Fat">
          <div className="MacroLabel">Fat • {macroProgress.fat}%</div>
          <div
            className="MacroPercent"
            style={{ width: `${macroProgress.fat}%` }}
          >
            {" "}
          </div>
        </div>
      </div>
    );
  } else {
    ItemsConsumed = "Select a log to view items consumed.";
  }

  return (
    <>
      <div className="PreviousLogs">
        <div className="SectionHeader">Select Log</div>
        <div className="LogList">
          {logList.length > 0 ? (
            logList
          ) : (
            <div className="placeholder">No Logs Yet</div>
          )}
        </div>
      </div>
      <div className="PieChartContainer">
        <div className="SectionHeader">Calorie Composition</div>
        <PieGraph name="PreviousPie" data={[protein * 4, carbs * 4, fat * 9]} />
      </div>
      <div className="BarChartContainer">
        <div className="SectionHeader">Goals</div>
        {goals}
      </div>
      <div className="ItemsConsumedContainer">
        <div className="SectionHeader">Meals</div>
        <div className="ItemsConsumedContainer">
          {ItemsConsumed > 0 ? (
            ItemsConsumed
          ) : (
            <div className="placeholder">No Meals Consumed</div>
          )}
        </div>
      </div>
    </>
  );
}
export default PreviousLogs;
