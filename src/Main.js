//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./Main.css";
import Navbar from "./Navbar";

function Main(props) {
  return (
    <div className="Main">
      <Navbar />
      <div className="Main-content">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/items" element={<h1>Items</h1>} />
          <Route path="/recipes" element={<h1>recipes</h1>} />
          <Route path="/tracker" element={<h1>tracker</h1>} />
        </Routes>
      </div>
    </div>
  );
}
export default Main;
