//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import "./NewRecipe.css";
import NewRecipeFormEntry from "./NewRecipeFormEntry";
import SelectableItem from "./SelectableItem";

function NewRecipe(props) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [formValues, setFormValues] = useState([]);
  let collection = [];

  useEffect(() => {
    console.log("mounted");
  }, []);

  collection = JSON.parse(localStorage.getItem("collection"));

  console.log(selectedItems);
  const ItemSelects = collection.map((item) => {
    return (
      <SelectableItem
        key={item.id}
        item={item}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    );
  });

  const NewRecipeFormEntries = selectedItems.map((item) => {
    return <NewRecipeFormEntry key={item.id} item={item} />;
  });

  return (
    <div className="NewRecipe">
      <div className="NewRecipePanel">
        <div className="SectionHeader">Select Ingredients</div>
        <div className="ItemSelectContainer">{ItemSelects}</div>
      </div>
      <div className="NewRecipePanel">
        <div className="SectionHeader">Specify Quantities</div>
        <div className="NewRecipeFormEntries">{NewRecipeFormEntries}</div>
      </div>
      <div className="NewRecipePanel">
        <span>Right</span>
      </div>
    </div>
  );
}
export default NewRecipe;
