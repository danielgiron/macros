import React, { useState, useEffect } from "react";
import c3 from "c3";
import "c3/c3.css";
import "./PieGraph.css";

function PieGraph(props) {
  const { name, data } = props;
  React.useEffect(() => {
    c3.generate({
      bindto: `#${name}`,
      data: {
        columns: [
          ["protein", data[0]],
          ["carbs", data[1]],
          ["fat", data[2]],
        ],
        colors: {
          protein: "#fa3737",
          carbs: "#3771fa",
          fat: "#fa9537",
        },
        type: "donut",
      },
    });
  }, [data]);

  return <div className="PieGraph" id={`${name}`} />;
}
export default PieGraph;
