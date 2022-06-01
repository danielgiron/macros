//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
// import "./ItemSelectable.css";

function ItemSelectable(props) {
  const { item, mealsToAdd, setMealsToAdd } = props;
  const [isSelected, setIsSelected] = useState(false);
  function toggleAddRecipe(e) {
    if (mealsToAdd.find((meal) => meal.id === item.id)) {
      setMealsToAdd(mealsToAdd.filter((meal) => meal.id !== item.id));
      setIsSelected(false);
    } else {
      setMealsToAdd([...mealsToAdd, item]);
      setIsSelected(true);
    }
  }
  return (
    <div
      onClick={toggleAddRecipe}
      className={`ItemSelectable ${
        mealsToAdd.find((meal) => meal.id === item.id) ? "isSelected" : ""
      }`}
    >
      <div className={`ItemSelectableName`}>{item.food_name}</div>
    </div>
  );
}
export default ItemSelectable;
