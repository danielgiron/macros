//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./Routes/Home/Home";
import ItemInfo from "./Routes/Items/ItemInfo";
import Items from "./Routes/Items/Items";
import Recipes from "./Routes/Recipes/Recipes";
import Tracker from "./Routes/Tracker/Tracker";
import NewRecipe from "./Routes/Recipes/NewRecipe";
import RecipeInfo from "./Routes/Recipes/RecipeInfo";

function Main(props) {
  return (
    <div className="Main">
      <Navbar />
      <div className="Content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items/:id" element={<ItemInfo />} />
          <Route path="/items" element={<Items />} />
          <Route path="/recipes/new" element={<NewRecipe />} />
          <Route path="/recipes/:id" element={<RecipeInfo />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="*" element={<div>Error Page Not Found :/</div>} />
        </Routes>
      </div>
    </div>
  );
}
export default Main;
