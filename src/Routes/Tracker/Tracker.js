//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import PreviousLogs from "./PreviousLogs";
import TSGContainer from "./TSGContainer";
import TodaysLog from "./TodaysLog";
import "./Tracker.css";
import { prepareLogs } from "./TrackerUtils";

function Tracker(props) {
  // FOR TESTING PURPOSES:
  // localStorage.removeItem("previousLogs");
  // localStorage.removeItem("todaysLog");

  const { todaysLog, previousLogs } = prepareLogs();
  console.log("todaysLog: ", todaysLog);
  console.log("previousLogs: ", previousLogs);

  return (
    <div className="Tracker">
      <TodaysLog todaysLog={todaysLog} />

      <div className="SecondSection">
        <div className="Big SectionHeader">Macro Trends</div>

        <TSGContainer previousLogs={previousLogs.reverse()} />
      </div>

      <div className="ThirdSection">
        <div className="Big SectionHeader" id="PreviousLogs">
          Previous Logs
          <div className="Buttons">
            <button>Clear Data</button>
            <button>Seed Data</button>
          </div>
        </div>
        <div className="PreviousLogsContainer">
          <PreviousLogs previousLogs={previousLogs} />
        </div>
      </div>
    </div>
  );
}
export default Tracker;
