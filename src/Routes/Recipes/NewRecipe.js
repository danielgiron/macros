import React, { useState } from "react";
import NewRecipeFormEntry from "./NewRecipeFormEntry";
import { compileNewRecipe, getCategorizedCollection } from "./RecipeUtils";

import "./NewRecipe.css";

function NewRecipe(props) {
  const [selectedItems, setSelectedItems] = useState([]);

  let collection = JSON.parse(localStorage.getItem("collection"));
  let recipes = JSON.parse(localStorage.getItem("recipes"));

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

    const newRecipe = compileNewRecipe(
      RecipeName.value,
      +NServings.value,
      items
    );

    recipes.push(newRecipe);

    localStorage.setItem("recipes", JSON.stringify([...recipes]));
  }

  return (
    <div className="NewRecipe">
      <div className="ItemSelectPanel Panel">
        <div className="PanelDescription">
          <div className="SectionHeader">Select Ingredients</div>
          <span>
            First, pick out the ingredients you would like to add to this recipe
          </span>
        </div>
        <div className="CategoryContainer">
          <div className="CategoryName">Baked Goods</div>
          <div className="ItemsContainer">
            {categories.BakedGoods.length > 0 ? (
              categories.BakedGoods
            ) : (
              <div className="placeholder">No Items Yet</div>
            )}
          </div>
        </div>
        <div className="CategoryContainer">
          <div className="CategoryName">Dairy</div>
          <div className="ItemsContainer">
            {categories.Dairy.length > 0 ? (
              categories.Dairy
            ) : (
              <div className="placeholder">No Items Yet</div>
            )}
          </div>
        </div>
        <div className="CategoryContainer">
          <div className="CategoryName">Meats</div>
          <div className="ItemsContainer">
            {categories.Meat.length > 0 ? (
              categories.Meat
            ) : (
              <div className="placeholder">No Items Yet</div>
            )}
          </div>
        </div>
        <div className="CategoryContainer">
          <div className="CategoryName">Produce</div>
          <div className="ItemsContainer">
            {categories.Produce.length > 0 ? (
              categories.Produce
            ) : (
              <div className="placeholder">No Items Yet</div>
            )}
          </div>
        </div>
        <div className="CategoryContainer">
          <div className="CategoryName">Miscellaneous</div>
          <div className="ItemsContainer">
            {categories.Miscellaneous.length > 0 ? (
              categories.Miscellaneous
            ) : (
              <div className="placeholder">No Items Yet</div>
            )}
          </div>
        </div>
      </div>

      <form action="/recipes" method="GET" onSubmit={handleSubmit}>
        <div className="QuantitiesPanel Panel">
          <div className="PanelDescription">
            <div className="SectionHeader">Specify Quantities</div>
            <span>
              Next, decide how much of each ingredient this recipe will need
            </span>
          </div>
          <div className="NewRecipeFormEntries">
            {NewRecipeFormEntries.length === 0 ? (
              <span className="placeholder">(Select items first)</span>
            ) : (
              NewRecipeFormEntries
            )}
          </div>
        </div>

        <div className="LastPanel Panel">
          <div>
            <div className="PanelDescription">
              <div className="SectionHeader">Steps / Notes</div>
              <span>
                Optionally, include the steps to prepare this recipe or any
                notes
              </span>
            </div>
            <span className="placeholder">(Coming soon)</span>
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
