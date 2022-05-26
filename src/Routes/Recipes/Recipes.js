import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import QuickForm from "./QuickForm";
import "./Recipes.css";
import { generateRecipeEntries } from "./RecipeUtils";

function Recipes(props) {
  // localStorage.setItem("recipes", JSON.stringify([]));

  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);

  // function handleClear(e) {
  //   setRecipes([]);
  // }

  // function handleSeed(e) {
  //   setRecipes(seedData);
  // }

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("recipes"));
    setRecipes(savedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
    // console.log("from didUpdate: recipes -> ", recipes);
  }, [recipes]);

  // console.log("From Recipes.js: ", recipes);
  function newRecipeClick(e) {
    navigate("/recipes/new");
  }

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
          <button onClick={newRecipeClick}>New Recipe</button>
        </div>
      </div>
      <div className="rightSide">
        <div className="sectionTitle">Your Recipes</div>
        <div className="RecipesContainer">{generateRecipeEntries(recipes)}</div>
      </div>
    </div>
  );
}
export default Recipes;
