//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/items">Items</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/tracker">Tracker</Link>
    </div>
  );
}
export default Navbar;
