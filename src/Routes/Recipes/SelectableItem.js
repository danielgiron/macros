//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import "./SelectableItem.css";

function SelectableItem(props) {
  const { selectedItems, setSelectedItems, item } = props;
  const [isSelected, setIsSelected] = useState(false);

  function toggleSelected() {
    if (isSelected) {
      const newSelects = selectedItems.filter((listItem) => {
        return item.id !== listItem.id;
      });
      setSelectedItems(newSelects);
    } else {
      setSelectedItems([...selectedItems, item]);
    }
    setIsSelected(!isSelected);
  }
  return (
    <div
      onClick={toggleSelected}
      className={`SelectableItem ${isSelected ? "Selected" : ""} ${
        item.category
      }`}
    >
      <span>{item.food_name}</span>
    </div>
  );
}
export default SelectableItem;
