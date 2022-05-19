import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import "./ItemEntry.css";

function ItemEntry(props) {
  const item = props.item;
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/items/${item.id}`);
      }}
      key={item.id}
      className={`Item ${item.category}`}
      collection={props.collection}
    >
      {item.food_name}
    </div>
  );
}
export default ItemEntry;
