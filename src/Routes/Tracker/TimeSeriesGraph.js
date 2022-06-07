//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import c3 from "c3";
import "c3/c3.css";
import "./TimeSeriesGraph.css";

function TimeSeriesGraph(props) {
  const { columns } = props;
  useEffect(() => {
    let chart = c3.generate({
      data: {
        x: "x",
        columns,
        colors: {
          Calories: "#ffae00",
          Protein: "#ff6f65",
          Carbs: "#65afff",
          Fat: "#c765ff",
        },
      },

      bindto: "#TimeSeriesGraph",
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%m/%d/%Y",
          },
        },
      },
    });
  }, []);

  return <div id="TimeSeriesGraph"></div>;
}
export default TimeSeriesGraph;
