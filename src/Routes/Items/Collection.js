import React, { useState, useEffect } from "react";
import { generateCategories } from "./itemUtils";
import "./Collection.css";

function Collection(props) {
  const collection = props.collection;

  const categories = generateCategories(collection);

  return (
    <div className="CollectionComponent">
      <div className="sectionHeader">
        <h1>Collection</h1>
        <div className="DataButtons">
          <button onClick={props.handleClear}>Clear Data</button>
          <button onClick={props.handleSeed}>Seed Sample Data</button>
        </div>
      </div>
      <div className="CollectionContainer">
        <div className="CategoryContainer ">
          <div className="CategoryTitle">Baked Goods</div>
          <div className="CategoryItems">
            {categories.BakedGoods.length > 0 ? (
              categories.BakedGoods
            ) : (
              <div className="placeholder">No Items Yet</div>
            )}
          </div>
        </div>
        <div className="CategoryContainer ">
          <div className="CategoryTitle">Dairy</div>
          <div className="CategoryItems">
            {categories.Dairy.length > 0 ? (
              categories.Dairy
            ) : (
              <div className="placeholder">No Items Yet</div>
            )}
          </div>
        </div>
        <div className="CategoryContainer ">
          <div className="CategoryTitle">Meats</div>
          <div className="CategoryItems">
            {categories.Meat.length > 0 ? (
              categories.Meat
            ) : (
              <div className="placeholder">No Items Yet</div>
            )}
          </div>
        </div>
        <div className="CategoryContainer ">
          <div className="CategoryTitle">Produce</div>
          <div className="CategoryItems">
            {categories.Produce.length > 0 ? (
              categories.Produce
            ) : (
              <div className="placeholder">No Items Yet</div>
            )}
          </div>
        </div>
        <div className="CategoryContainer ">
          <div className="CategoryTitle">Miscellaneous</div>
          <div className="CategoryItems">
            {categories.Miscellaneous.length > 0 ? (
              categories.Miscellaneous
            ) : (
              <div className="placeholder">No Items Yet</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
