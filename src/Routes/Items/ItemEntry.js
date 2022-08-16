import { useNavigate, useParams } from "react-router-dom";
import React from "react";

function ItemEntry(props) {
  const item = props.item;
  let navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/items/${item.id}`);
      }}
      key={item.id}
      className={`Item ${item.category}`}
      collection={props.collection}
    >
      {item.food_name}
    </li>
  );
}
export default ItemEntry;
