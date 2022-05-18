//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import ItemSearch from "./ItemSearch";
import "./Items.css";

function Items(props) {
  const [collection, setCollection] = useState([]);
  const renderedCollection = collection.map((item) => {
    console.log("from Items", item);
    return <div className="Item"> {item.food_name} </div>;
  });
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
