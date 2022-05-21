//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import QuickForm from "./QuickForm";
import "./Recipes.css";

function Recipes(props) {
  const [recipes, setRecipes] = useState([]);
  // localStorage.setItem("recipes", JSON.stringify([]));

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes"));
    setRecipes([...recipes, ...savedRecipes]);
  }, []);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
    console.log("New Recipe:", recipes);
  }, [recipes]);

  return (
    <div className="Recipes">
      <div className="leftSide">
        <div className="PageInfo">
          <div className="sectionTitle">Recipes</div>
          <p>
            On this page you can create new recipes and view their nutrional
            composition. You can then add these recipes to your daily eating
            logs on the Tracker page
          </p>
        </div>
        <div className="QuickAdd">
          <div className="QuickFormContainer">
            <QuickForm recipes={recipes} setRecipes={setRecipes} />
          </div>
        </div>
        <div className="NewRecipe">
          <div className="sectionTitle">New Recipe</div>
        </div>
      </div>
      <div className="rightSide">
        <div className="sectionTitle">Your Recipes</div>
        <div className="RecipesContainer">List of Recipes</div>
      </div>
    </div>
  );
}
export default Recipes;
