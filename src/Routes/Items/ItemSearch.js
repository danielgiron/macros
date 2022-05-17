import React, { useEffect, useState } from "react";
import Field from "./Field.js";
import "./ItemSearch.css";
import getFoodItem from "./fetchFood";

function ItemSearch(props) {
  // const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({});
  const [formValues, setFormValues] = useState({
    food: "",
  });

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

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit prevented");
    const inputData = new FormData(e.target);
    const input = Object.fromEntries(inputData.entries());
    // console.log("input: ", input.food);

    let api_return;
    try {
      api_return = await getFoodItem(input.food);
    } catch {
      api_return = { error: "Food not found :/" };
    }

    if (api_return.error) {
      console.log(api_return.error);
    } else {
      console.log(api_return);
    }
  };

  const fieldComponents = fields.map((field) => {
    return (
      <Field
        key={field.id}
        {...field}
        value={formValues[field.name]}
        onChange={onChange}
      />
    );
  });

  const formComponent = (
    <form onSubmit={handleSubmit}>
      <h1>ItemSearch</h1>
      {fieldComponents}
      <button>Submit</button>
    </form>
  );

  const resultComponent = <div className="results">{formValues.food}</div>;

  return (
    <div className="ItemSearch">
      {formComponent}
      {resultComponent}
    </div>
  );
}

export default ItemSearch;
