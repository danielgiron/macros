//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./Main.css";
import Navbar from "./Navbar";

import Home from "./Routes/Home/Home";
import ItemInfo from "./Routes/Items/ItemInfo";
import Items from "./Routes/Items/Items";
import Recipes from "./Routes/Recipes/Recipes";
import Tracker from "./Routes/Tracker/Tracker";

function Main(props) {
  return (
    <div className="Main">
      <Navbar />
      <div className="Main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items/:id" element={<ItemInfo />} />
          <Route path="/items" element={<Items />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/tracker" element={<Tracker />} />
        </Routes>
      </div>
    </div>
  );
}
export default Main;
