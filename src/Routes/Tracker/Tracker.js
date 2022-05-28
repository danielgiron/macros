//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import "./Tracker.css";

function Tracker(props) {
  return (
    <div className="Tracker">
      <div className="FirstSection">
        <div className="Big SectionHeader">Today</div>
        <div className="Graphs">
          <div className="PieChart">Pie</div>
          <div className="BarChart">Bar</div>
        </div>
        <div className="SetGoals">
          <div className="SectionHeader">Set Goals</div>
          <div className="SetGoalsForm">
            <div className="SetGoalsFormInput Calories">Calories</div>
            <div className="SetGoalsFormInput Protein">Protein</div>
            <div className="SetGoalsFormInput Carbs">Carbs</div>
            <div className="SetGoalsFormInput Fat">Fat</div>
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
      <div className="SecondSection">
        <div className="Big SectionHeader">Macro Trends</div>
        <div className="BigLineGraphContainer">
          <div className="BigLineGraph">Graph</div>
          <div className="GraphControls">
            <button className="GraphControlsButton">Week</button>
            <button className="GraphControlsButton">Month</button>
            <button className="GraphControlsButton">Year</button>
            <button className="GraphControlsButton">All</button>
          </div>
        </div>
      </div>
      <div className="ThirdSection">
        <div className="Big SectionHeader">Previous Logs</div>
        <div className="PreviousLogsContainer">
          <div className="PreviousLogs">
            <div className="logEntry">Previous Day</div>
            <div className="logEntry">Previous Day</div>
            <div className="logEntry">Previous Day</div>
            <div className="logEntry">Previous Day</div>
            <div className="logEntry">Previous Day</div>
            <div className="logEntry">Previous Day</div>
            <div className="logEntry">Previous Day</div>
          </div>
          <div className="PieChartContainer">
            <span>Pie Chart</span>
          </div>
          <div className="BarChartContainer">
            <span>Bar Chart</span>
          </div>
          <div className="ItemsConsumedContainer">
            <div className="ItemEntry">Food Item</div>
            <div className="ItemEntry">Food Item</div>
            <div className="ItemEntry">Food Item</div>
            <div className="ItemEntry">Food Item</div>
            <div className="ItemEntry">Food Item</div>
            <div className="ItemEntry">Food Item</div>
            <div className="ItemEntry">Food Item</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tracker;
