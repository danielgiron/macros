//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import c3 from "c3";
import "c3/c3.css";
import TimeSeriesGraph from "./TimeSeriesGraph";
// import "./TSGContainer.css";

function TSGContainer(props) {
  return (
    <div className="TSGContainer">
      <TimeSeriesGraph />
      <div className="GraphControls">
        <button className="GraphControlsButton">Week</button>
        <button className="GraphControlsButton">Month</button>
        <button className="GraphControlsButton">Year</button>
        <button className="GraphControlsButton">All</button>
      </div>
    </div>
  );
}
export default TSGContainer;
