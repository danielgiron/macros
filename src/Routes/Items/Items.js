//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import ItemSearch from "./ItemSearch";
import "./Items.css";

function Items(props) {
  const [collection, setCollection] = useState([]);
  const renderedCollection = collection.map((item) => {
    // console.log("from Items", item);
    return (
      <div key={item.tags.tag_id} className="Item">
        {item.food_name}
      </div>
    );
  });

  const item1 = {
    food_name: "tuna",
    full_nutrients: [],
    nf_calories: 180,
    nf_protein: 18,
    nf_total_carbohydrate: 2,
    nf_total_fat: 3,
    photo: {},
    serving_qty: 1,
    serving_unit: "oz",
    serving_weight_grams: 120,
    tags: { tag_id: 1 },
  };

  const item2 = {
    food_name: "chicken",
    full_nutrients: [],
    nf_calories: 120,
    nf_protein: 26,
    nf_total_carbohydrate: 0,
    nf_total_fat: 2,
    photo: {},
    serving_qty: 1,
    serving_unit: "oz",
    serving_weight_grams: 120,
    tags: { tag_id: 2 },
  };

  // localStorage.setItem("collection", JSON.stringify([item1, item2]));
  // console.log(JSON.parse(localStorage.getItem("collection")));

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("collection"));
    setCollection(savedData);
    // console.log("from didMount: collection -> ", collection);
  }, []);

  useEffect(() => {
    // const oldCollection = localStorage.getItem("collection");
    localStorage.setItem("collection", JSON.stringify(collection));
    console.log("from didUpdate: collection -> ", collection);
  }, [collection]);

  return (
    <div className="Items">
      <div className="Page-Info">
        <div className="Title">Items</div>
        <div className="Description">
          On this page you can add new items to your collection and view their
          nutritional details
        </div>
      </div>

      <ItemSearch collection={collection} setCollection={setCollection} />

      <div className="Collection">{renderedCollection}</div>
    </div>
  );
}
export default Items;
