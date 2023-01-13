//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import ItemSearch from "./ItemSearch";
import Collection from "./Collection";
import "./Items.css";
import { seedData } from "./seedData";

function Items(props) {
  if (!localStorage.getItem("collection")) {
    localStorage.setItem("collection", JSON.stringify([]));
  }
  const [collection, setCollection] = useState([]);

  // Clear user collection data (to be used on Items Page on button click)
  function handleClear(e) {
    setCollection([]);
  }

  // Set user collection data to default example data
  function handleSeed(e) {
    setCollection(seedData);
  }

  // On render, populate collection data in data saved in localstorage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("collection"));
    setCollection(savedData);
  }, []);

  // Store all changes to collection data in localstorage
  useEffect(() => {
    localStorage.setItem("collection", JSON.stringify(collection));
  }, [collection]);

  return (
    <div className="Items">
      <div className="Page-Info">
        <div className="Title">Items</div>
        <div className="Description">
          Add new items to your collection and view their nutritional details
        </div>
      </div>

      <ItemSearch collection={collection} setCollection={setCollection} />

      <Collection
        handleSeed={(e) => {
          handleSeed(e);
        }}
        handleClear={(e) => {
          handleClear(e);
        }}
        collection={collection}
        setCollection={setCollection}
      />
    </div>
  );
}
export default Items;
