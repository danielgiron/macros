//import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import "./QuickFormField.css";
import { generateInput } from "./RecipeUtils";

function QuickFormField(props) {
  return (
    <div className="QuickFormField">
      <label htmlFor={props.fieldName}>{props.label}</label>
      {generateInput(props)}
    </div>
  );
}
export default QuickFormField;
