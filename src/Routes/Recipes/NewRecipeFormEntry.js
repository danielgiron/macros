//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import "./NewRecipeFormEntry.css";
import { measures } from "./RecipeUtils";

function NewRecipeFormEntry(props) {
  const { item } = props;

  const options = measures.map((measure, index) => {
    return (
      <option key={index} value={measure.gram_weight}>
        {measure.name}
      </option>
    );
  });

  const [quantity, setQuantity] = useState(0);
  const [measure, setMeasure] = useState();

  function onChange_NumberInput(e) {
    setQuantity(e.target.value);
  }

  function onChange_SelectInput(e) {
    setMeasure(e.target.value);
    console.log(measure);
  }

  // useEffect(() => {
  //   console.log(`${item.food_name} quantity: `, quantity, measure);
  // }, [quantity, measure]);

  return (
    <div key={item.id} className="NewRecipeFormEntry">
      <label className="EntryName" htmlFor={`${item.food_name}_amount`}>
        {item.food_name}
      </label>

      <div className="data">
        <input
          id={`${item.food_name}_amount`}
          onChange={onChange_NumberInput}
          type="Number"
          placeholder="Qty"
          required={true}
        />
        <select onChange={onChange_SelectInput} defaultValue={options[0]}>
          {options}
        </select>
        <input
          type="hidden"
          className="FormEntryValue_hiddenInput"
          value={JSON.stringify({
            name: item.food_name,
            id: item.id,
            quantity: +quantity,
            measure_weight: +measure,
            serving_weight_grams: +item.serving_weight_grams,
            macrosPerGram: {
              calories: item.nf_calories / item.serving_weight_grams,
              protein: item.nf_protein / item.serving_weight_grams,
              fat: item.nf_total_fat / item.serving_weight_grams,
              carb: item.nf_total_carbohydrate / item.serving_weight_grams,
            },
          })}
        />
      </div>
    </div>
  );
}
export default NewRecipeFormEntry;
