import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import QuickForm from "./QuickForm";
import "./Recipes.css";
import { generateRecipeEntries } from "./RecipeUtils";
import { sampleRecipes } from "./SampleRecipes";

function Recipes(props) {
  // const [useSampleData, set_useSampleData] = useState(false);

  // localStorage.setItem("recipes", JSON.stringify([]));
  // console.log(JSON.parse(localStorage.getItem("recipes")));
  if (!localStorage.getItem("collection")) {
    localStorage.setItem("collection", JSON.stringify([]));
  }

  if (!localStorage.getItem("recipes")) {
    localStorage.setItem("recipes", JSON.stringify([]));
  }

  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);

  function deleteRecipe(recipe) {
    const newRecipes = recipes.filter((r) => r.id !== recipe.id);
    setRecipes(newRecipes);
    localStorage.setItem("recipes", JSON.stringify(newRecipes));
  }

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("recipes"));
    setRecipes(savedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  function toggleSampleData() {
    // useSampleData?
  }

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
            On this page you can create new recipes and view their nutritional
            composition. You may then add these recipes to your daily eating log
            on the Tracker page
          </p>
        </div>

        <div className="QuickFormContainer">
          <QuickForm recipes={recipes} setRecipes={setRecipes} />
        </div>

        <div className="NewRecipe">
          <div className="sectionTitle">New Recipe</div>
          <p>
            Use this form to create a recipe and obtain nutritional info about
            it and all of its ingredients
          </p>
          <button onClick={newRecipeClick}>New Recipe</button>
        </div>
      </div>
      <div className="rightSide">
        <div className="sectionTitle">
          <span>Your Recipes</span>
          <button
            onClick={() => {
              if (
                window.confirm(
                  "Loading sample data will overwrite your saved recipes. Do you wish to continue?"
                )
              ) {
                setRecipes(sampleRecipes);
              } else {
              }
            }}
          >
            Load Sample Data
          </button>
        </div>

        <div className="RecipesContainer">
          {recipes.length > 0 ? (
            generateRecipeEntries(recipes, deleteRecipe)
          ) : (
            <div className="placeholder">You have no recipes yet</div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Recipes;
