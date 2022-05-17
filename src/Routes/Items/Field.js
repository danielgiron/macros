import React, { useState } from "react";
import "./Field.css";

function Field(props) {
  const { fieldName, placeholder, label, pattern, required } = props;
  const [focused, setFocused] = useState(false);
  //   const capFieldName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);

  const handleChange = (e) => {
    props.onChange(e);
    // console.log(e.target.value);
  };

  const handleFocused = (e) => {
    setFocused(true);
  };

  return (
    <div className="Field">
      <label htmlFor={fieldName}>{label + ": "}</label>
      <input
        type={props.type}
        id={fieldName}
        name={fieldName}
        placeholder={placeholder}
        onChange={handleChange}
        pattern={pattern}
        onBlur={handleFocused}
        required={required}
        focused={focused.toString()}
      />
      <div className="Field-errorMsg">{props.errorMsg}</div>
    </div>
  );
}

export default Field;
