import React, { useState, useEffect } from "react";
import { generateCategories } from "./itemUtils";
import "./Collection.css";

function Collection(props) {
  const collection = props.collection;

  const categories = generateCategories(collection);

  function copyJSON() {
    const copyJSON = document.createElement("div");
    copyJSON.value = JSON.stringify(collection);
    navigator.clipboard.writeText(copyJSON.value);
  }

  return (
    <div className="CollectionComponent">
      <div className="sectionHeader">
        <h1>Collection</h1>
        <div className="DataButtons">
          <button onClick={props.handleClear}>Clear Data</button>
          <button onClick={props.handleSeed}>Seed Sample Data</button>
          <button onClick={copyJSON}>Copy JSON</button>
        </div>
      </div>
      <div className="CollectionContainer">
        <div className="CategoryContainer ">
          <div className="CategoryTitle">Dairy</div>
          <div className="CategoryItems">{categories.Dairy}</div>
        </div>
        <div className="CategoryContainer ">
          <div className="CategoryTitle">Baked Goods</div>
          <div className="CategoryItems">{categories.BakedGoods}</div>
        </div>
        <div className="CategoryContainer ">
          <div className="CategoryTitle">Meats</div>
          <div className="CategoryItems">{categories.Meat}</div>
        </div>
        <div className="CategoryContainer ">
          <div className="CategoryTitle">Produce</div>
          <div className="CategoryItems">{categories.Produce}</div>
        </div>
        <div className="CategoryContainer ">
          <div className="CategoryTitle">Miscellaneous</div>
          <div className="CategoryItems">{categories.Miscellaneous}</div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
