//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import ItemSearch from "./ItemSearch";
import Collection from "./Collection";
import "./Items.css";
import { seedData } from "./seedData";

function Items(props) {
  const [collection, setCollection] = useState([]);

  function handleClear(e) {
    setCollection([]);
  }

  function handleSeed(e) {
    setCollection(seedData);
  }

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("collection"));
    setCollection(savedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("collection", JSON.stringify(collection));
    // console.log("from didUpdate: collection -> ", collection);
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
