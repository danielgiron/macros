//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import RecipeSelectable from "./RecipeSelectable";
import ItemSelectable from "./ItemSelectable";
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

  const itemSelects = collection.map((item) => {
    return (
      <ItemSelectable
        key={item.id}
        item={item}
        mealsToAdd={mealsToAdd}
        setMealsToAdd={setMealsToAdd}
      />
    );
  });

  return (
    <div className={`AddMealPopUp ${isHidden ? "isHidden" : ""}`}>
      <div className="Big SectionHeader">Select Meals to Add</div>
      <div className="SectionHeader">By Recipe</div>
      <div className="RecipeSelectablesContainer">{recipeSelects}</div>

      <div className="SectionHeader">By Item</div>
      <div className="ItemSelectablesContainer">{itemSelects}</div>

      <button onClick={closeAddPopUp}>Close</button>
    </div>
  );
}
export default AddMealPopUp;
