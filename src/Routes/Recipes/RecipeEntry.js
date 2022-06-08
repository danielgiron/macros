//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RecipeEntry.css";

function RecipeEntry(props) {
  const navigate = useNavigate();
  const recipe = props.recipe;
  return (
    <div className="RecipeEntry">
      <div className="RecipeName">{props.recipe.recipeName}</div>
      <div className="RecipeMacros">
        <div className="Macro" id="Calories">
          <span>Calories</span>
          <span>{recipe.totalCalories.toFixed(2)}</span>
        </div>
        <div className="Macro" id="Protein">
          <span>Protein</span>
          <span>{recipe.totalProtein.toFixed(2)}</span>
        </div>
        <div className="Macro" id="Carb">
          <span>Carbs</span>
          <span>{recipe.totalCarb.toFixed(2)}</span>
        </div>
        <div className="Macro" id="Fat">
          <span>Fats</span>
          <span>{recipe.totalFat.toFixed(2)}</span>
        </div>
      </div>
      <div className="Buttons">
        <button
          onClick={() => {
            navigate(`${recipe.id}`);
          }}
        >
          More Info
        </button>
        <button
          className="deleteButton"
          onClick={() => props.deleteRecipe(recipe)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default RecipeEntry;
