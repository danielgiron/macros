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

  if (activeLog) {
    ItemsConsumed = activeLog.mealsEaten.map((meal, index) => {
      return (
        <div key={index} className="ItemEntry">
          {meal.mealName}
        </div>
      );
    });

    protein = activeLog.macrosConsumed.protein;
    carbs = activeLog.macrosConsumed.carbs;
    fat = activeLog.macrosConsumed.fat;
    calories = activeLog.macrosConsumed.calories;
  } else {
    ItemsConsumed = "Select a log to view items consumed.";
  }

  return (
    <>
      <div className="PreviousLogs">
        <div className="SectionHeader">Select Log</div>
        <div className="LogList">{logList}</div>
      </div>
      <div className="PieChartContainer">
        <div className="SectionHeader">Calorie Composition</div>
        <PieGraph name="PreviousPie" data={[protein * 4, carbs * 4, fat * 9]} />
      </div>
      <div className="BarChartContainer">
        <div className="SectionHeader">Goals</div>
        {/* <GoalsGraph /> */}
      </div>
      <div className="ItemsConsumedContainer">
        <div className="SectionHeader">Meals</div>
        <div className="ItemsConsumedContainer">{ItemsConsumed}</div>
      </div>
    </>
  );
}
export default PreviousLogs;
