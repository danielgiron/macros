//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function withSuffix(date) {
    let suffixes = [];
    suffixes[1] = "st";
    suffixes[2] = "nd";
    suffixes[3] = "rd";
    suffixes[21] = "st";
    suffixes[22] = "nd";
    suffixes[23] = "rd";
    suffixes[31] = "st";

    if (suffixes[date]) {
      return date + suffixes[date];
    } else {
      return date + "th";
    }
  }

  const TimeData = new Date();
  const day = TimeData.getDay();
  const date = TimeData.getDate();
  const month = TimeData.getMonth();
  const year = TimeData.getFullYear();

  return (
    <div className="Header">
      <h1>macrOS</h1>
      <div className="Header-Date">
        <span>{weekday[day]}</span>
        {` ${months[month]} ${withSuffix(date)}, ${year}`}
      </div>
    </div>
  );
}
export default Header;
