//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
// import './NewRecipeFormEntry.css'

function NewRecipeFormEntry(props) {
  // DONT RELY ON ALT_MEASURES, USE YOUR OWN MEASURES
  // [{measure: "cup", gramWeight:244}, {measure:"tbsp", gramWeight:5}...]
  const { item } = props;

  const options = item.alt_measures.map((measure, index) => {
    return (
      <option key={index} value={measure.measure}>
        {measure.measure}
      </option>
    );
  });

  const [quantity, setQuantity] = useState(0);
  const [measure, setMeasure] = useState(options[0].props.value);
  const [gramAmount, updateGramAmount] = useState(0);

  function onChange_NumberInput(e) {
    setQuantity(e.target.value);
  }

  function onChange_SelectInput(e) {
    setMeasure(e.target.value);
  }

  useEffect(() => {
    console.log(`${item.food_name} quantity: `, quantity, measure);
  }, [quantity, measure]);

  return (
    <div key={item.id} className="NewRecipeFormEntry">
      <div className="EntryName">{item.food_name}</div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input onChange={onChange_NumberInput} type="Number" />
        <select onChange={onChange_SelectInput} defaultValue={options[0]}>
          {options}
        </select>
      </div>
    </div>
  );
}
export default NewRecipeFormEntry;
