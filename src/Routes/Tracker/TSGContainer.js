//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import c3 from "c3";
import "c3/c3.css";
import TimeSeriesGraph from "./TimeSeriesGraph";
import { seedLogs } from "./LogSeedData";
import { formatDate, populateColumns } from "./TrackerUtils";

// import "./TSGContainer.css";

function TSGContainer(props) {
  const { previousLogs } = props;

  const [timeFrame, setTimeFrame] = useState(7);

  // 'columns' is an array containing arrays of data to be passed into <TimeSeriesGraph />
  let columns = populateColumns(timeFrame, previousLogs);
  console.log("Time frame: ", timeFrame);

  useEffect(() => {
    columns = populateColumns(timeFrame, previousLogs);
  }, [timeFrame]);
  //   console.log(columns);

  function handleTimeFrameChange(numDays) {
    setTimeFrame(numDays);
  }

  return (
    <div className="TSGContainer">
      <TimeSeriesGraph columns={columns} />
      <div className="GraphControls">
        <button
          onClick={() => handleTimeFrameChange(7)}
          className="GraphControlsButton"
        >
          7-Day
        </button>
        <button
          onClick={() => handleTimeFrameChange(30)}
          className="GraphControlsButton"
        >
          30-Day
        </button>
        <button
          onClick={() => handleTimeFrameChange(365)}
          className="GraphControlsButton"
        >
          Year
        </button>
        <button
          onClick={() => handleTimeFrameChange(Number.MAX_SAFE_INTEGER)}
          className="GraphControlsButton"
        >
          All
        </button>
      </div>
    </div>
  );
}
export default TSGContainer;
