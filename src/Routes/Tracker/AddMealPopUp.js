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
      <div className="RecipeSelectablesContainer">{recipeSelects}</div>

      <div className="SectionHeader">By Item</div>
      <div className="ItemSelectablesContainer">
        <div className="SectionHeader">Baked Goods</div>
        {BakedGoodsSelects}
      </div>
      <div className="ItemSelectablesContainer">
        <div className="SectionHeader">Dairy</div>
        {DairySelects}
      </div>
      <div className="ItemSelectablesContainer">
        <div className="SectionHeader">Meats</div>
        {MeatSelects}
      </div>
      <div className="ItemSelectablesContainer">
        <div className="SectionHeader">Produce</div>
        {ProduceSelects}
      </div>
      <div className="ItemSelectablesContainer">
        <div className="SectionHeader">Miscellaneous</div>
        {MiscellaneousSelects}
      </div>

      <button onClick={closeAddPopUp}>Close and Add Selected Items</button>
    </div>
  );
}
export default AddMealPopUp;
