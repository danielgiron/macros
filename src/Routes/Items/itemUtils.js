const nutritionix_key = "32d54e5d69a98a8624cc81712bb937e7";
const nutritionix_id = "f29aaa43";

export async function getFoodItem(query) {
  const endpoint = `https://trackapi.nutritionix.com/v2/natural/nutrients`;
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-app-id": nutritionix_id,
      "x-app-key": nutritionix_key,
      "x-remote-user-id": 0,
    },
    body: JSON.stringify({
      query: `${query}`,
    }),
  };
  let food = "";
  await fetch(endpoint, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      food = data.foods[0];
    });

  return food;
}

export function processReturn(api_return) {
  const {
    food_name,
    full_nutrients,
    nf_calories,
    nf_protein,
    nf_total_carbohydrate,
    nf_total_fat,
    photo,
    serving_qty,
    serving_unit,
    serving_weight_grams,
    tags,
  } = api_return;

  const newItem = {
    food_name,
    full_nutrients,
    nf_calories,
    nf_protein,
    nf_total_carbohydrate,
    nf_total_fat,
    photo,
    serving_qty,
    serving_unit,
    serving_weight_grams,
    tags,
  };
  return newItem;
}

export function generateFieldDivs(fieldsArray, onChange_confirm) {
  const confirmationFieldDivs = fieldsArray.map((field) => {
    let input;
    if (field.type === "text") {
      input = (
        <input
          id={field.fieldname}
          name={field.fieldname}
          type={field.type}
          onChange={onChange_confirm}
          value={field.value}
          required={field.required}
        />
      );
    } else if (field.type === "select") {
      const options = field.options.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      });
      input = (
        <select
          id={field.fieldname}
          name={field.fieldname}
          defaultValue="Select One"
          required={true}
        >
          <option value={null} selected disabled hidden>
            Select One
          </option>
          {options}
        </select>
      );
    }
    return (
      <div key={field.fieldname} className="confirmationField">
        <label htmlFor={field.fieldname}>{field.label}</label>
        {input}
      </div>
    );
  });
  return confirmationFieldDivs;
}
