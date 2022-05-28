import React, { useState, useEffect } from "react";
import NewRecipeFormEntry from "./NewRecipeFormEntry";
import { compileNewRecipe, getCategorizedCollection } from "./RecipeUtils";

import "./NewRecipe.css";

function NewRecipe(props) {
  const [selectedItems, setSelectedItems] = useState([]);

  let collection = JSON.parse(localStorage.getItem("collection"));
  let recipes = JSON.parse(localStorage.getItem("recipes"));

  useEffect(() => {
    console.log("mounted");
  }, []);

  const categories = getCategorizedCollection(
    collection,
    selectedItems,
    setSelectedItems
  );

  const NewRecipeFormEntries = selectedItems.map((item) => {
    return <NewRecipeFormEntry key={item.id} item={item} />;
  });

  function handleSubmit(e) {
    // e.preventDefault();
    const QtyValues = document.querySelectorAll(".FormEntryValue_hiddenInput");
    const RecipeName = document.querySelector("#RecipeName");
    const NServings = document.querySelector("#RecipeServings");
    let items = [];

    for (let entry of QtyValues) {
      if (!(JSON.parse(entry.value).quantity === 0)) {
        items.push(JSON.parse(entry.value));
      }
    }

    const newRecipe = compileNewRecipe(RecipeName.value, NServings, items);

    // console.log(newRecipe);
    recipes.push(newRecipe);
    console.log(recipes);
    localStorage.setItem("recipes", JSON.stringify([...recipes]));
  }

  return (
    <div className="NewRecipe">
      <div className="NewRecipePanel ItemSelectPanel">
        <div className="PanelDescription">
          <div className="SectionHeader">Select Ingredients</div>
          <span>
            First, pick out the ingredients you would like to add to this recipe
          </span>
        </div>
        <div className="CategoryContainer">
          <div className="CategoryName">Baked Goods</div>
          <div className="ItemsContainer">{categories.BakedGoods}</div>
        </div>
        <div className="CategoryContainer">
          <div className="CategoryName">Dairy</div>
          <div className="ItemsContainer">{categories.Dairy}</div>
        </div>
        <div className="CategoryContainer">
          <div className="CategoryName">Meats</div>
          <div className="ItemsContainer">{categories.Meat}</div>
        </div>
        <div className="CategoryContainer">
          <div className="CategoryName">Produce</div>
          <div className="ItemsContainer">{categories.Produce}</div>
        </div>
        <div className="CategoryContainer">
          <div className="CategoryName">Miscellaneous</div>
          <div className="ItemsContainer">{categories.Miscellaneous}</div>
        </div>
      </div>
      <form action="/recipes" method="GET" onSubmit={handleSubmit}>
        <div className="NewRecipePanel Quantities">
          <div className="PanelDescription">
            <div className="SectionHeader">Specify Quantities</div>
            <span>
              Next, decide how much of each ingredient this recipe will need
            </span>
          </div>
          <div className="NewRecipeFormEntries">
            {NewRecipeFormEntries.length === 0 ? (
              <span className="lilMessage">(Select items first)</span>
            ) : (
              NewRecipeFormEntries
            )}
          </div>
        </div>
        <div className="NewRecipePanel LastColumn">
          <div>
            <div className="PanelDescription">
              <div className="SectionHeader">Steps / Notes</div>
              <span>
                Optionally, include the steps to prepare this recipe or any
                notes
              </span>
            </div>
            <span className="lilMessage">(Coming soon)</span>
          </div>
          <div className="CompletionBox">
            <div className="SectionHeader">Lastly</div>
            <div className="nameInput">
              <label htmlFor="RecipeName">Recipe Name:</label>
              <input
                id="RecipeName"
                type={"text"}
                placeholder="Enter name"
                required={true}
              />
            </div>
            <div className="servingsInput">
              <label htmlFor="RecipeServings">Servings:</label>
              <input
                id="RecipeServings"
                type={"number"}
                placeholder="No. of Servings"
                required={true}
              />
            </div>
            <button>Done</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default NewRecipe;
