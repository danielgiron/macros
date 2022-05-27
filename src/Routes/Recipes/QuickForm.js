//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import "./QuickForm.css";
import QuickFormField from "./QuickFormField";
import { getQuickFormFields } from "./RecipeUtils";
import { v4 as uuidv4 } from "uuid";

function QuickForm(props) {
  const [quickValues, setQuickValues] = useState({
    recipeName: "",
    totalCalories: "",
    totalProtein: "",
    totalCarb: "",
    totalFat: "",
    category: "",
    servings: "",
    id: uuidv4(),
    //the following values below are not populated for QuickAdd Recipes
    items: [],
    steps: [],
  });

  useEffect(() => {
    // console.log(quickValues);
  }, [quickValues]);

  function handleChange(e) {
    setQuickValues({ ...quickValues, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(quickValues);

    const newRecipe = {
      recipeName: quickValues.recipeName,
      totalCalories: +quickValues.totalCalories,
      totalProtein: +quickValues.totalProtein,
      totalCarb: +quickValues.totalCarb,
      totalFat: +quickValues.totalFat,
      category: quickValues.category,
      servings: +quickValues.servings,
      id: uuidv4(),
      //the following values below are not populated for QuickAdd Recipes
      items: [],
      steps: [],
    };

    props.setRecipes([...props.recipes, newRecipe]);

    setQuickValues({
      recipeName: "",
      totalCalories: "",
      totalProtein: "",
      totalCarb: "",
      totalFat: "",
      category: "",
      servings: "",
      id: uuidv4(),
      //the following values below are not populated for QuickAdd Recipes
      items: [],
      steps: [],
    });
  }

  const quickFormFields = getQuickFormFields(quickValues);
  const quickFormFieldComponents = quickFormFields.map((field) => {
    return (
      <QuickFormField
        onChange={handleChange}
        key={field.fieldname}
        {...field}
      />
    );
  });

  return (
    <form onSubmit={handleSubmit} className="QuickForm">
      <div className="QuickFormColumn" id={"first"}>
        <div id="QuickFormTitle">
          <div>Quick Add</div>
          <div>Recipe</div>
        </div>
        <p>
          Enter the minimum required info for a new recipe.
          <span className="note">
            (Note: These recipes will not have complete nutritional data like
            those entered through the form below)
          </span>
        </p>
      </div>
      <div className="QuickFormColumn" id={"second"}>
        {quickFormFieldComponents[0]}
        {quickFormFieldComponents[1]}
        {quickFormFieldComponents[2]}
        {quickFormFieldComponents[3]}
      </div>
      <div className="QuickFormColumn" id={"third"}>
        {quickFormFieldComponents[4]}
        {quickFormFieldComponents[5]}
        {quickFormFieldComponents[6]}
        <button>Submit</button>
      </div>
    </form>
  );
}
export default QuickForm;
