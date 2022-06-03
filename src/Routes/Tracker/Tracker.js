//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import PreviousLogs from "./PreviousLogs";
import TodaysLog from "./TodaysLog";
import "./Tracker.css";
import { prepareLogs } from "./TrackerUtils";

function Tracker(props) {
  // FOR TESTING PURPOSES:
  // localStorage.removeItem("previousLogs");
  // localStorage.removeItem("todaysLog");

  const { todaysLog, previousLogs } = prepareLogs();
  console.log("todaysLog: ", todaysLog);
  // console.log("previousLogs: ", previousLogs);

  return (
    <div className="Tracker">
      <TodaysLog todaysLog={todaysLog} />
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
          <PreviousLogs previousLogs={previousLogs} />
        </div>
      </div>
    </div>
  );
}
export default Tracker;
