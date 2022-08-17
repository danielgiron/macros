//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findRecipeByID, measures } from "./RecipeUtils";
import PieGraph from "../Tracker/PieGraph.js";
import { useNavigate } from "react-router-dom";
import "./RecipeInfo.css";

function RecipeInfo(props) {
  function deleteRecipe(recipe) {
    const newRecipes = recipes.filter((r) => r.id !== recipe.id);
    localStorage.setItem("recipes", JSON.stringify(newRecipes));
  }

  const navigate = useNavigate();
  const { id } = useParams();
  const recipes = JSON.parse(localStorage.getItem("recipes"));
  const recipe = findRecipeByID(id, recipes);

  console.log(recipe);

  const itemRows = recipe.items.map((item) => {
    const measure = measures.find(
      (measure) => measure.gram_weight === item.measure_weight
    );
    const qtyString = `${item.quantity} ${measure.name}${
      measure.name === "serving" && item.quantity > 1 ? "s" : ""
    }`;

    let totalGrams;
    if (item.measure_weight) {
      totalGrams = item.quantity * item.measure_weight;
    } else {
      totalGrams = item.quantity * item.serving_weight_grams;
    }

    return (
      <tr key={item.id}>
        <td className="ItemName">{item.name}</td>
        <td>{Math.round(item.macrosPerGram.calories * totalGrams)}</td>
        <td>{Math.round(item.macrosPerGram.protein * totalGrams)}g</td>
        <td>{Math.round(item.macrosPerGram.carb * totalGrams)}g</td>
        <td>{Math.round(item.macrosPerGram.fat * totalGrams)}g</td>
        <td>{qtyString}</td>
      </tr>
    );
  });

  return (
    <div className="RecipeInfo">
      <div className="Big SectionHeader">
        <div>{recipe.recipeName}</div>
        <span> Recipe Info</span>
      </div>

      <div className="RecipeInfoGraphics">
        <div className="Pie">
          <div className="SectionHeader">Calorie Composition</div>
          <PieGraph
            name="RecipeInfo"
            data={[
              recipe.totalProtein * 4,
              recipe.totalCarb * 4,
              recipe.totalFat * 9,
            ]}
          />
        </div>
        <div className="MacroPills">
          <div className="SectionHeader">Macro Summary</div>
          <div className="MacroPill Calories">
            <span>Calories</span>
            <span>{Math.round(recipe.totalCalories)}</span>
          </div>
          <div className="MacroPill Protein">
            <span>Protein</span> <span>{Math.round(recipe.totalProtein)}g</span>
          </div>
          <div className="MacroPill Carb">
            <span>Carb</span> <span>{Math.round(recipe.totalCarb)}g</span>
          </div>
          <div className="MacroPill Fat">
            <span>Fat</span> <span>{Math.round(recipe.totalFat)}g</span>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className="ItemName">Item</th>
            <th>Calories</th>
            <th>Protein</th>
            <th>Carb</th>
            <th>Fat</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>{itemRows}</tbody>
      </table>

      <div className="Buttons">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="back"
        >
          Back
        </button>
        <button
          onClick={() => {
            deleteRecipe(recipe);
            navigate(-1);
          }}
          className="delete"
        >
          Delete Recipe
        </button>
      </div>
    </div>
  );
}
export default RecipeInfo;
