//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import AddMealPopUp from "./AddMealPopUp";
import { v4 as uuidv4 } from "uuid";
// import "./AddMeal.css";

function AddMeal(props) {
  const { mealsEaten, setMealsEaten } = props;
  const [isHidden, setIsHidden] = useState(true);
  const [mealsToAdd, setMealsToAdd] = useState([]);

  if (!localStorage.getItem("recipes")) {
    localStorage.setItem("recipes", JSON.stringify([]));
  }
  if (!localStorage.getItem("collection")) {
    localStorage.setItem("collection", JSON.stringify([]));
  }
  const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  const collection = JSON.parse(localStorage.getItem("collection")) || [];

  function openAddPopUp(e) {
    // e.preventDefault();
    // setMealsEaten([...mealsEaten, { name: "", calories: 0 }]);
    setIsHidden(false);
  }

  function closeAddPopUp(e) {
    setIsHidden(true);

    // console.log("Meals to add: ", mealsToAdd);
    const updatedMeals = mealsToAdd.map((meal) => {
      if (meal.recipeName) {
        return {
          // ...meal,
          mealEaten_id: uuidv4(),
          mealName: meal.recipeName,
          mealCalories: +meal.totalCalories / +meal.servings,
          mealProtein: +meal.totalProtein / +meal.servings,
          mealCarbs: +meal.totalCarb / +meal.servings,
          mealFat: +meal.totalFat / +meal.servings,
          mealServings: +meal.servings,
        };
      } else if (meal.food_name) {
        return {
          // ...meal,
          mealEaten_id: uuidv4(),
          mealName: meal.food_name,
          mealCalories: +meal.nf_calories,
          mealProtein: +meal.nf_protein,
          mealCarbs: +meal.nf_total_carbohydrate,
          mealFat: +meal.nf_total_fat,
          mealServings: 1,
        };
      }
    });
    // console.log("Updated meals: ", updatedMeals);
    setMealsEaten([...mealsEaten, ...updatedMeals]);
    setMealsToAdd([]);
  }

  function cancelAddPopUp(e) {
    setIsHidden(true);
    setMealsToAdd([]);
  }

  function removeMealFromLog(mealToRemove) {
    const updatedMeals = mealsEaten.filter(
      (meal) => meal.mealEaten_id !== mealToRemove.mealEaten_id
    );
    console.log(updatedMeals);
    props.setMealsEaten([...updatedMeals]);
  }

  const eatenMealEntries = mealsEaten.map((meal) => {
    return (
      <li className="Meal" key={meal.mealEaten_id}>
        <button
          onClick={() => {
            removeMealFromLog(meal);
          }}
          className="removeMealButton"
        >
          x
        </button>
        {meal.mealName}
      </li>
    );
  });

  return (
    <div className="TodaysMealsContainer">
      <div className="SectionHeader">
        <span>Add Meal</span>{" "}
        <button onClick={openAddPopUp} id="AddMealButton">
          +
        </button>
      </div>
      <div className="AddMealSection">
        {eatenMealEntries.length > 0 ? (
          eatenMealEntries
        ) : (
          <div className="placeholder">No Entries Yet</div>
        )}
      </div>

      <AddMealPopUp
        // {...props}
        isHidden={isHidden}
        mealsToAdd={mealsToAdd}
        setMealsToAdd={setMealsToAdd}
        closeAddPopUp={closeAddPopUp}
        cancelAddPopUp={cancelAddPopUp}
        recipes={recipes}
        collection={collection}
      />
    </div>
  );
}
export default AddMeal;

{
  /* <div className="TodaysMealsContainer">
  <div className="SectionHeader">Add Meal</div>
  <div className="AddMealSection">
    <button onClick={openAddPopUp} className="AddMealButton">
      +
    </button>
    <li className="Meal" key={meal.mealEaten_id}>
      <button className="removeMealButton">x</button>
    </li>
  </div>

  <AddMealPopUp />:
  {
    <div className={`AddMealPopUp isHidden`}>
      <p>PopUp</p>
        {recipeSelects}:
      {...
        <div
          onClick={toggleAddRecipe}
          className={`RecipeSelect isSelected`}
        >
          <div className={`RecipeSelectName`}>{recipe.recipeName}</div>
        </div>
      ...}
      <button onClick={closeAddPopUp}>Close</button>
    </div>
  }
</div>; */
}
