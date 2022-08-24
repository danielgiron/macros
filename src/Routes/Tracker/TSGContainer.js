import React, { useState, useEffect } from "react";

import TimeSeriesGraph from "./TimeSeriesGraph";
import { seedLogs } from "./SeedLogs";

function TSGContainer(props) {
  const { previousLogs } = props;

  const [timeFrame, setTimeFrame] = useState(7);
  const [useSeedData, setUseSeedData] = useState(false);

  function handleTimeFrameChange(numDays) {
    setTimeFrame(numDays);
  }

  let data = previousLogs;
  if (useSeedData) {
    data = seedLogs;
  }

  return (
    <div className="TSGContainer">
      <TimeSeriesGraph timeFrame={timeFrame} logs={data} />

      <div className="GraphControls">
        <label>Time Frame</label>
        <button
          onClick={() => handleTimeFrameChange(7)}
          className={`GraphControlsButton ${timeFrame === 7 ? "active" : ""}`}
        >
          7-Day
        </button>
        <button
          onClick={() => handleTimeFrameChange(14)}
          className={`GraphControlsButton ${timeFrame === 14 ? "active" : ""}`}
        >
          14-Day
        </button>
        <button
          onClick={() => handleTimeFrameChange(30)}
          className={`GraphControlsButton ${timeFrame === 30 ? "active" : ""}`}
        >
          30-Day
        </button>
        <button
          onClick={() => handleTimeFrameChange(Number.MAX_SAFE_INTEGER)}
          className={`GraphControlsButton ${
            timeFrame === Number.MAX_SAFE_INTEGER ? "active" : ""
          }`}
        >
          All
        </button>
        <hr />
        <button
          onClick={() => {
            setUseSeedData(!useSeedData);
          }}
        >
          Use {useSeedData ? "My" : "Sample"} Data
        </button>
      </div>
    </div>
  );
}
export default TSGContainer;
