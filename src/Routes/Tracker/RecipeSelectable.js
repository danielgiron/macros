//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
// import {v4 as uuidv4} from 'uuid';
// import './RecipeSelectable.css'

function RecipeSelectable(props) {
  const { recipe, mealsToAdd, setMealsToAdd } = props;
  const [isSelected, setIsSelected] = useState(false);

  function toggleAddRecipe(e) {
    if (mealsToAdd.find((meal) => meal.id === recipe.id)) {
      setMealsToAdd(mealsToAdd.filter((meal) => meal.id !== recipe.id));
    } else {
      setMealsToAdd([...mealsToAdd, recipe]);
    }
  }

  return (
    <div
      onClick={toggleAddRecipe}
      className={`RecipeSelectable ${
        mealsToAdd.find((meal) => meal.id === recipe.id) ? "isSelected" : ""
      }`}
    >
      <div className={`RecipeSelectableName`}>{recipe.recipeName}</div>
    </div>
  );
}
export default RecipeSelectable;
