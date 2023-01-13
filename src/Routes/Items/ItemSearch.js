import React, { useState } from "react";
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
      required: true,
    },
  ];

  // The following two functions are used to track user updates on form data
  // for querying API and confirming results for local storage
  const onChange_search = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onChange_confirm = (e) => {
    setConfirmationValues({
      ...confirmationValues,
      [e.target.name]: e.target.value,
    });
  };

  // On user "Search" button click
  // Prevent default form behavior, read user input,
  // Make request to Nutritionix API for item data
  // On successful API call, populate search result fields for user confirmation
  // Otherwise alert user of failure
  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputData = new FormData(e.target);
    const input = Object.fromEntries(inputData.entries());

    let api_return;
    try {
      api_return = await getFoodItem(input.food);
      const newItem = processReturn(api_return);
      setSearchResults_Mobile_Hidden(true);

      setFoodData({ ...newItem });
      setConfirmationValues({ ...newItem });
    } catch {
      api_return = { error: "Food not found :/" };
      alert(
        "Sorry! Item not found...Please try again, or check the item you're searching for is spelled correctly."
      );
    }
  };

  // For use when user opts to manually enter food item data
  // NOTE: No image data will be retrieved, and such item entries
  // will have empty fields for image and full micronutrient info fields
  // on ItemInfo pages
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

  // Used in generating input field html elements for search results confirmation
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
    {
      fieldname: "category",
      type: "select",
      options: ["Baked Goods", "Dairy", "Meat", "Produce", "Miscellaneous"],
      label: "Category",
      required: true,
      pattern: null,
    },
  ];

  // Function executed once user confirms search results from Nutritionix API call.
  // Add item to collection data from parent component, and save to update to localstorage.
  // Clear confirmation and search fields for use in next user item search query.
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

  // For use when user decides to cancel saving an item search result to localstorage.
  // Clear all form data.
  function handleConfirmCancel(e) {
    e.preventDefault();
    setSearchResults_Mobile_Hidden(false);
    setFoodData({});
    setConfirmationValues({});
    setFormValues({});
  }

  return (
    <div className="ItemSearch">
      <div
        className={`searchContainer ${
          searchResults_Mobile_Hidden ? "Hidden" : ""
        }`}
      >
        <form onSubmit={handleSubmit}>
          <div className="title">Item Search</div>
          {fieldComponents}
          <button>Search</button>
        </form>
        <button id="newEmptyItemButton" onClick={handleManualItemEntry}>
          To manually enter new item, click here
        </button>
      </div>
      <div
        className={`confirmationContainer ${
          !searchResults_Mobile_Hidden ? "Hidden" : ""
        }`}
      >
        {foodData?.food_name ? (
          <>
            <form onSubmit={handleConfirmSubmit} className="confirmationForm">
              <h1>Confirm Item</h1>
              {generateFieldDivs(confirmationForm_fields, onChange_confirm)}
              <div className="buttons">
                <button type="button" onClick={handleConfirmCancel}>
                  Cancel
                </button>
                <button id="ConfirmButton" type="submit">
                  Confirm
                </button>
              </div>
            </form>
          </>
        ) : (
          <div
            className="confirmationForm placeholder"
            style={{ textAlign: "center" }}
          >
            Nothing here yet! Search for an item and your results will appear
            here
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemSearch;
