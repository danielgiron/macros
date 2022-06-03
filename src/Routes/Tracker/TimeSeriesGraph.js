//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import c3 from "c3";
import "c3/c3.css";
import "./TimeSeriesGraph.css";

function TimeSeriesGraph(props) {
  useEffect(() => {
    let chart = c3.generate({
      data: {
        x: "x",
        columns: [
          [
            "x",
            "2013-01-01",
            "2013-01-02",
            "2013-01-03",
            "2013-01-04",
            "2013-01-05",
            "2013-01-06",
          ],
          ["Calories", 30, 200, 100, 400, 150, 250],
          ["Protein", 130, 340, 200, 500, 250, 350],
          ["Carbs", 140, 140, 250, 400, 200, 300],
          ["Fat", 410, 230, 420, 350, 210, 340],
        ],
        colors: {
          Calories: "#ffc965",
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
            format: "%Y-%m-%d",
          },
        },
      },
    });
  }, []);

  return <div id="TimeSeriesGraph"></div>;
}
export default TimeSeriesGraph;
