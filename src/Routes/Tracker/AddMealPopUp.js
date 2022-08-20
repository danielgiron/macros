//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import RecipeSelectable from "./RecipeSelectable";
import ItemSelectable from "./ItemSelectable";
import { ItemSelects } from "./TrackerUtils";
// import "./AddMealPopUp.css";

function AddMealPopUp(props) {
  const {
    recipes,
    collection,
    isHidden,
    mealsToAdd,
    setMealsToAdd,
    closeAddPopUp,
  } = props;
  const recipeSelects = recipes.map((recipe) => {
    return (
      <RecipeSelectable
        key={recipe.id}
        recipe={recipe}
        mealsToAdd={mealsToAdd}
        setMealsToAdd={setMealsToAdd}
      />
    );
  });

  const {
    DairySelects,
    MeatSelects,
    BakedGoodsSelects,
    MiscellaneousSelects,
    ProduceSelects,
  } = ItemSelects(collection, mealsToAdd, setMealsToAdd);

  return (
    <div className={`AddMealPopUp ${isHidden ? "isHidden" : ""}`}>
      <div className="Big SectionHeader">Select Meals to Add</div>
      <div className="SectionHeader">By Recipe</div>
      <div className="RecipeSelectablesContainer">
        {recipes.length > 0 ? (
          recipeSelects
        ) : (
          <div className="placeholder">No Recipes Saved</div>
        )}
      </div>

      <div className="SectionHeader">By Item</div>
      <div className="ItemSelectablesContainer">
        <div className="SectionHeader">Baked Goods</div>
        {BakedGoodsSelects.length > 0 ? (
          BakedGoodsSelects
        ) : (
          <div className="placeholder">No Baked Good Items Saved</div>
        )}
      </div>
      <div className="ItemSelectablesContainer">
        <div className="SectionHeader">Dairy</div>
        {DairySelects.length > 0 ? (
          DairySelects
        ) : (
          <div className="placeholder">No Dairy Items Saved</div>
        )}
      </div>
      <div className="ItemSelectablesContainer">
        <div className="SectionHeader">Meats</div>
        {MeatSelects.length > 0 ? (
          MeatSelects
        ) : (
          <div className="placeholder">No Meat Items Saved</div>
        )}
      </div>
      <div className="ItemSelectablesContainer">
        <div className="SectionHeader">Produce</div>
        {ProduceSelects.length > 0 ? (
          ProduceSelects
        ) : (
          <div className="placeholder">No Produce Items Saved</div>
        )}
      </div>
      <div className="ItemSelectablesContainer">
        <div className="SectionHeader">Miscellaneous</div>
        {MiscellaneousSelects.length > 0 ? (
          MiscellaneousSelects
        ) : (
          <div className="placeholder">No Miscellaneous Items Saved</div>
        )}
      </div>

      <button onClick={closeAddPopUp}>
        Close and Add Selected Items ({mealsToAdd.length})
      </button>
    </div>
  );
}
export default AddMealPopUp;
