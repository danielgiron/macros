import React, { useEffect, useState } from "react";
import Field from "./Field.js";
import "./ItemSearch.css";
import {
  getFoodItem,
  newEmptyItem,
  processReturn,
  generateFieldDivs,
} from "./itemUtils";

function ItemSearch(props) {
  // used to update Item Search form input
  const [formValues, setFormValues] = useState({});
  // used to store food data retrieved from nutritionix api
  const [foodData, setFoodData] = useState({});
  // used to store user modified values of food data
  const [confirmationValues, setConfirmationValues] = useState({});
  // used for mobile view, swapping between search form and confirmation form
  const [searchResults_Mobile_Hidden, setSearchResults_Mobile_Hidden] =
    useState(false);

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
      // console.log(newItem);
      setSearchResults_Mobile_Hidden(true);

      setFoodData({ ...newItem });
      setConfirmationValues({ ...newItem });
    } catch {
      api_return = { error: "Food not found :/" };
    }
  };

  const handleManualItemEntry = (e) => {
    const newItem = newEmptyItem();
    console.log(newItem);
    setFoodData(newItem);
    setConfirmationValues(newItem);
    setSearchResults_Mobile_Hidden(true);
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
    <>
      <form onSubmit={handleSubmit}>
        <div className="title">Item Search</div>
        {fieldComponents}
        <button>Search</button>
      </form>
      <button id="newEmptyItemButton" onClick={handleManualItemEntry}>
        To manually enter new item, click here
      </button>
    </>
  );

  const confirmationForm_fields = [
    {
      fieldname: "food_name",
      type: "text",
      label: "Name",
      value: confirmationValues.food_name,
      required: true,
      pattern: null,
    },
    {
      fieldname: "nf_calories",
      type: "text",
      label: "Calories",
      value: confirmationValues.nf_calories,
      required: true,
      pattern: null,
    },
    {
      fieldname: "nf_total_carbohydrate",
      type: "text",
      label: "Carbs (g)",
      value: confirmationValues.nf_total_carbohydrate,
      required: true,
      pattern: null,
    },
    {
      fieldname: "nf_total_fat",
      type: "text",
      label: "Fat (g)",
      value: confirmationValues.nf_total_fat,
      required: true,
      pattern: null,
    },
    {
      fieldname: "nf_protein",
      type: "text",
      label: "Protein (g)",
      value: confirmationValues.nf_protein,
      required: true,
      pattern: null,
    },
    {
      fieldname: "serving_weight_grams",
      type: "text",
      label: "Serving Size (g)",
      value: confirmationValues.serving_weight_grams,
      required: true,
      pattern: null,
    },
    // {
    //   fieldname: "serving_size", // item.serving_qty + " " + item.serving_unit
    //   type: "text",
    //   label: "Serving Size",
    //   value: confirmationValues.serving_size,
    //   required: true,
    //   pattern: null,
    // },
    {
      fieldname: "category",
      type: "select",
      options: ["Baked Goods", "Dairy", "Meat", "Produce", "Miscellaneous"],
      label: "Category",
      // value: null,
      required: true,
      pattern: null,
    },
  ];

  function handleConfirmSubmit(e) {
    e.preventDefault();
    setSearchResults_Mobile_Hidden(false);
    const inputData = new FormData(e.target);
    const confirmedItem = Object.fromEntries(inputData.entries());

    props.setCollection([
      ...props.collection,
      { ...foodData, ...confirmedItem },
    ]);

    setFoodData({});
    setConfirmationValues({});
    setFormValues({});
  }
  function handleConfirmCancel(e) {
    e.preventDefault();
    setSearchResults_Mobile_Hidden(false);
    setFoodData({});
    setConfirmationValues({});
    setFormValues({});
  }

  let confirmationForm;
  if (foodData.food_name) {
    confirmationForm = (
      <>
        <form onSubmit={handleConfirmSubmit} className="confirmationForm">
          <h1>Confirm Item</h1>
          {generateFieldDivs(confirmationForm_fields, onChange_confirm)}
          <button>Confirm</button>
        </form>
        <button onClick={handleConfirmCancel}>Cancel</button>
      </>
    );
  } else {
    confirmationForm = <div className="confirmationForm">Nothing here yet</div>;
  }

  return (
    <div className="ItemSearch">
      <div
        className={`searchContainer ${
          searchResults_Mobile_Hidden ? "Hidden" : ""
        }`}
      >
        {formComponent}
      </div>
      <div
        className={`confirmationContainer ${
          !searchResults_Mobile_Hidden ? "Hidden" : ""
        }`}
      >
        {confirmationForm}
      </div>
    </div>
  );
}

export default ItemSearch;
