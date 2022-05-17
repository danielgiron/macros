//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import ItemSearch from "./ItemSearch";
import "./Items.css";

function Items(props) {
  return (
    <div className="Items">
      <div className="Page-Info">
        <div className="Title">Items</div>
        <div className="Description">
          On this page you can add new items to your collection and view their
          nutritional details
        </div>
      </div>

      <ItemSearch />

      <div className="Collection">
        <div className="Item">[ Single Item ]</div>
        <div className="Item">[ Single Item ]</div>
        <div className="Item">[ Single Item ]</div>
        <div className="Item">[ Single Item ]</div>
      </div>
    </div>
  );
}
export default Items;
