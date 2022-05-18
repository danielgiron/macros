import React, { useEffect, useState } from "react";
import Field from "./Field.js";
import "./ItemSearch.css";
import { getFoodItem, processReturn, generateFieldDivs } from "./itemUtils";

function ItemSearch(props) {
  // used to update Item Search form input
  const [formValues, setFormValues] = useState({});
  // used to store food data retrieved from nutritionix api
  const [foodData, setFoodData] = useState({});
  // used to store user modified values of food data
  const [confirmationValues, setConfirmationValues] = useState({});

  const fields = [
    {
      id: 0,
      fieldName: "food",
      label: "Food name",
      placeholder: "Enter food item to search for",
      type: "text",
      errorMsg: "Must enter valid food item",
      // pattern: null,
      required: true,
    },
  ];

  const onChange_search = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const onChange_confirm = (e) => {
    setConfirmationValues({
      ...confirmationValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputData = new FormData(e.target);
    const input = Object.fromEntries(inputData.entries());

    let api_return;
    try {
      api_return = await getFoodItem(input.food);
      const newItem = processReturn(api_return);
      console.log(newItem);
      setFoodData({ ...newItem });
      setConfirmationValues({ ...newItem });
    } catch {
      api_return = { error: "Food not found :/" };
    }
  };

  const fieldComponents = fields.map((field) => {
    return (
      <Field
        key={field.id}
        {...field}
        value={formValues[field.name]}
        onChange={onChange_search}
      />
    );
  });

  const formComponent = (
    <form onSubmit={handleSubmit}>
      <h1>Item Search</h1>
      {fieldComponents}
      <button>Submit</button>
    </form>
  );

  const confirmationForm_fields = [
    {
      fieldname: "food_name",
      label: "Name",
      value: confirmationValues.food_name,
      required: true,
      pattern: null,
    },
    {
      fieldname: "nf_calories",
      label: "Calories",
      value: confirmationValues.nf_calories,
      required: true,
      pattern: null,
    },
    {
      fieldname: "nf_total_carbohydrate",
      label: "Carbs (g)",
      value: confirmationValues.nf_total_carbohydrate,
      required: true,
      pattern: null,
    },
    {
      fieldname: "nf_total_fat",
      label: "Fat (g)",
      value: confirmationValues.nf_total_fat,
      required: true,
      pattern: null,
    },
    {
      fieldname: "nf_protein",
      label: "Protein (g)",
      value: confirmationValues.nf_protein,
      required: true,
      pattern: null,
    },
    {
      fieldname: "serving_weight_grams",
      label: "Serving Size (g)",
      value: confirmationValues.serving_weight_grams,
      required: true,
      pattern: null,
    },
  ];

  function handleConfirmSubmit(e) {
    e.preventDefault();
    const inputData = new FormData(e.target);
    const confirmedItem = Object.fromEntries(inputData.entries());
    // console.log("From confirm: ", confirmedItem);
    // STILL NEED TO NORMALIZE ITEM ENTRY (IN GRAMS)
    props.setCollection([
      ...props.collection,
      { ...foodData, ...confirmedItem },
    ]);
  }

  let confirmationForm;
  if (foodData.food_name) {
    confirmationForm = (
      <form onSubmit={handleConfirmSubmit} className="confirmationForm">
        <h1>Confirm Item</h1>
        {generateFieldDivs(confirmationForm_fields, onChange_confirm)}
        <button>Confirm</button>
      </form>
    );
  } else {
    confirmationForm = <div className="confirmationForm">Nothing here yet</div>;
  }

  // <div classname="confirmationContainer">
  //   <div className="confirmationForm">
  //     ...
  //     <div className="confirmationField">
  //       <label>...</label>
  //       <input />
  //     </div>
  //    ...
  //   </div>
  // </div>

  return (
    <div className="ItemSearch">
      <div className="searchContainer">{formComponent}</div>
      <div className="confirmationContainer">{confirmationForm}</div>
    </div>
  );
}

export default ItemSearch;
