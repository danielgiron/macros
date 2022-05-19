import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ItemInfo.css";

function ItemInfo(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleDelete() {
    const oldCollectionData = localStorage.getItem("collection");
    const oldCollection = JSON.parse(oldCollectionData);
    const newCollection = oldCollection.filter((oldItem) => {
      console.log(`Comparing ${id} and ${oldItem.id}`);
      return !(oldItem.id == id);
    });
    localStorage.setItem("collection", JSON.stringify(newCollection));
    navigate(-1);
    // console.log(newCollection);
    // setCollection(newCollection);
  }

  function handleBack() {
    navigate(-1);
  }
  return (
    <div className="ItemInfo">
      <h1>ItemInfo</h1>
      <div>{id}</div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}
export default ItemInfo;
