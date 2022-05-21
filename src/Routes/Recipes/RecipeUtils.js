export function getQuickFormFields(quickValues) {
  return [
    {
      fieldname: "recipeName",
      label: "Recipe Name",
      type: "text",
      value: quickValues.recipeName,
      placeholder: "Enter name",
      //   pattern: "",
    },
    {
      fieldname: "totalCalories",
      label: "Total Calories",
      type: "text",
      value: quickValues.totalCalories,
      placeholder: "kcals (kj)",

      //   pattern: "",
    },
    {
      fieldname: "totalProtein",
      label: "Total Protein",
      type: "text",
      value: quickValues.totalProtein,
      placeholder: "grams (g)",

      //   pattern: "",
    },
    {
      fieldname: "totalCarb",
      label: "Total Carb",
      type: "text",
      value: quickValues.totalCarb,
      placeholder: "grams (g)",

      //   pattern: "",
    },
    {
      fieldname: "totalFat",
      label: "Total Fat",
      type: "text",
      value: quickValues.totalFat,
      placeholder: "grams (g)",

      //   pattern: "",
    },
    {
      fieldname: "category",
      label: "Category",
      type: "select",
      value: quickValues.category,
      defaultValue: "Miscellaneous",
      options: ["Miscellaneous"],
      //   pattern: "",
    },
    {
      fieldname: "servings",
      label: "No. Servings",
      type: "text",
      value: quickValues.servings,
      placeholder: "Per recipe",

      //   pattern: "",
    },
  ];
}

// generates input element for <QuickFormField />
export function generateInput(props) {
  let input;
  if (props.type == "text") {
    input = (
      <input
        id={props.fieldname}
        name={props.fieldname}
        {...props}
        required={true}
      />
    );
  } else if (props.type == "select") {
    const options = props.options.map((option, index) => {
      return (
        <option key={index} value={option.replace(" ", "")}>
          {option}
        </option>
      );
    });
    input = (
      <select
        id={props.fieldname}
        name={props.fieldname}
        defaultValue={props.fieldDefault ? props.fieldDefault : "Miscellaneous"}
        required={true}
      >
        {options}
      </select>
    );
  }

  return input;
}
