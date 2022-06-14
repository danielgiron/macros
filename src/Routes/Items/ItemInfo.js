import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ItemInfo.css";
import { getItemById, generateFieldDivs, getFullNutrients } from "./itemUtils";
import { attr } from "./attr";

function ItemInfo(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleDelete() {
    const oldCollectionData = localStorage.getItem("collection");
    const oldCollection = JSON.parse(oldCollectionData);
    const newCollection = oldCollection.filter((oldItem) => {
      //   console.log(`Comparing ${id} and ${oldItem.id}`);
      return !(oldItem.id == id);
    });

    localStorage.setItem("collection", JSON.stringify(newCollection));
    navigate(-1);
  }

  function handleBack() {
    navigate(-1);
  }

  let item = getItemById(id);

  const [itemValues, setItemValues] = useState({ ...item });
  //   const [itemValues, setItemValues] = useState({
  //     food_name: "",
  //     nf_calories: "",
  //     nf_protein: "",
  //     nf_total_carbohydrate: "",
  //     nf_total_fat: "",
  //     serving_weight_grams: "",
  //   });
  const onChange = (e) => {
    setItemValues({
      ...itemValues,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // setItemValues({ ...item });
  }, [itemValues]);

  const fields = [
    {
      fieldname: "food_name",
      type: "text",
      label: "Name",
      value: itemValues.food_name,
      required: true,
      pattern: null,
    },
    {
      fieldname: "nf_calories",
      type: "text",
      label: "Calories",
      value: itemValues.nf_calories,
      required: true,
      pattern: null,
    },
    {
      fieldname: "nf_total_carbohydrate",
      type: "text",
      label: "Carbs (g)",
      value: itemValues.nf_total_carbohydrate,
      required: true,
      pattern: null,
    },
    {
      fieldname: "nf_total_fat",
      type: "text",
      label: "Fat (g)",
      value: itemValues.nf_total_fat,
      required: true,
      pattern: null,
    },
    {
      fieldname: "nf_protein",
      type: "text",
      label: "Protein (g)",
      value: itemValues.nf_protein,
      required: true,
      pattern: null,
    },
    {
      fieldname: "serving_weight_grams",
      type: "text",
      label: "Serving Weight (g)",
      value: itemValues.serving_weight_grams,
      required: true,
      pattern: null,
    },
    {
      fieldname: "serving_size",
      type: "text",
      label: "Serving Size",
      value: `${itemValues.serving_qty} ${itemValues.serving_unit}`,
      mutable: false,
      required: true,
      pattern: null,
    },
    {
      fieldname: "category",
      type: "select",
      options: ["Baked Goods", "Dairy", "Meat", "Produce", "Miscellaneous"],
      label: "Category",
      fieldDefault: itemValues.category,
      required: true,
      pattern: null,
    },
  ];

  const fieldDivs = generateFieldDivs(fields, onChange);
  //   console.log(item.full_nutrients);
  const fullNutrients = getFullNutrients(item).map((n) => {
    return (
      <div key={n.name} className="nutrient">
        <span className="nutrientName">{n.name} </span>
        <span className="nutrientAmount">
          {n.amount}
          {n.unit}
        </span>
      </div>
    );
  });

  let imgDiv = "";
  if (item.photo) {
    imgDiv = <img src={item.photo.thumb} alt={`${item.food_name}`} />;
  }

  return (
    <div className="ItemInfo">
      <div className="leftSide">
        <div className="infoHeader">
          {imgDiv}
          <div>
            <div>{item.food_name}</div>
            <span> Item Info </span>
          </div>
        </div>

        <div className="itemValues">{fieldDivs}</div>
        <div className="buttons">
          <button id="back" onClick={handleBack}>
            Back
          </button>
          <button id="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      <div className="fullNutrientsContainer">
        <h1>Full Nutrient Panel</h1>

        <div className="fullNutrients">{fullNutrients}</div>
      </div>
    </div>
  );
}
export default ItemInfo;
