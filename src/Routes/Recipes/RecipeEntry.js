//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import "./RecipeEntry.css";

function RecipeEntry(props) {
  const recipe = props.recipe;
  return (
    <div className="RecipeEntry">
      <div className="RecipeName">{props.recipe.recipeName}</div>
      <div className="RecipeMacros">
        <div className="Macro" id="Calories">
          <span>Calories</span>
          <span>{recipe.totalCalories}</span>
        </div>
        <div className="Macro" id="Protein">
          <span>Protein</span>
          <span>{recipe.totalProtein}</span>
        </div>
        <div className="Macro" id="Carb">
          <span>Carbs</span>
          <span>{recipe.totalCarb}</span>
        </div>
        <div className="Macro" id="Fat">
          <span>Fats</span>
          <span>{recipe.totalFat}</span>
        </div>
      </div>
      <button>More Info</button>
    </div>
  );
}
export default RecipeEntry;
