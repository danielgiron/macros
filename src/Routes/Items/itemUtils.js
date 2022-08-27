import ItemEntry from "./ItemEntry";
import { attr } from "./attr";
import { v4 as uuidv4 } from "uuid";

//////////////////////////////////////////////////////  ITEMSEARCH COMPONENT

const nutritionix_key = process.env.REACT_APP_NUTRITIONIX_KEY;
const nutritionix_id = process.env.REACT_APP_NUTRITIONIX_ID;

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
  console.log(api_return);
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
    alt_measures,
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
    serving_unit: serving_unit.replace('"', " inch"),
    serving_weight_grams,
    alt_measures,
    id: uuidv4(),
  };
  return newItem;
}

export function newEmptyItem() {
  const newItem = {
    food_name: "New Item",
    full_nutrients: [],
    nf_calories: 0,
    nf_protein: 0,
    nf_total_carbohydrate: 0,
    nf_total_fat: 0,
    // photo: "",
    serving_qty: 0,
    serving_unit: "",
    serving_weight_grams: 0,
    alt_measures: [],
    id: uuidv4(),
  };
  return newItem;
}

export function generateFieldDivs(fieldsArray, onChange) {
  const confirmationFieldDivs = fieldsArray.map((field) => {
    let input;
    if (field.type === "text") {
      input = (
        <input
          id={field.fieldname}
          name={field.fieldname}
          type={field.type}
          onChange={onChange}
          value={field.value}
          required={field.required}
        />
      );
    } else if (field.type === "select") {
      const options = field.options.map((option, index) => {
        return (
          <option key={index} value={option.replace(" ", "")}>
            {option}
          </option>
        );
      });
      input = (
        <select
          id={field.fieldname}
          name={field.fieldname}
          defaultValue={
            field.fieldDefault ? field.fieldDefault : "Miscellaneous"
          }
          required={true}
          style={{ border: "1px solid orange" }}
        >
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

//////////////////////////////////////////////////////  COLLECTION COMPONENT

export function generateCategories(collection) {
  const DairyItems = collection.filter((item) => {
    return item.category === "Dairy";
  });
  const BakedGoodsItems = collection.filter((item) => {
    return item.category === "BakedGoods";
  });
  const MeatItems = collection.filter((item) => {
    return item.category === "Meat";
  });
  const MiscellaneousItems = collection.filter((item) => {
    return item.category === "Miscellaneous";
  });
  const ProduceItems = collection.filter((item) => {
    return item.category === "Produce";
  });

  const DairyCollection = DairyItems.map((item) => {
    return <ItemEntry key={item.id} item={item} />;
  });
  const BakedGoodsCollection = BakedGoodsItems.map((item) => {
    return <ItemEntry key={item.id} item={item} />;
  });
  const MeatCollection = MeatItems.map((item) => {
    return <ItemEntry key={item.id} item={item} />;
  });
  const MiscellaneousCollection = MiscellaneousItems.map((item) => {
    return <ItemEntry key={item.id} item={item} />;
  });
  const ProduceCollection = ProduceItems.map((item) => {
    return <ItemEntry key={item.id} item={item} />;
  });

  const categories = {
    Dairy: DairyCollection,
    BakedGoods: BakedGoodsCollection,
    Meat: MeatCollection,
    Miscellaneous: MiscellaneousCollection,
    Produce: ProduceCollection,
  };

  return categories;
}

//////////////////////////////////////////////////////// ITEMINFO.js
export function getItemById(id) {
  let itemInQuestion = JSON.parse(localStorage.getItem("collection"));

  itemInQuestion = itemInQuestion.filter((item) => {
    return item.id == id;
  });
  itemInQuestion = itemInQuestion[0];
  return itemInQuestion;
}

export function getFullNutrients(item) {
  const attrList = attr;
  let fullNutrients = [];
  item.full_nutrients.map((n) => {
    if (attrList[n.attr_id]) {
      fullNutrients.push({
        name: attrList[n.attr_id].name,
        amount: n.value.toFixed(2),
        unit: attr[n.attr_id].unit,
      });
    }
  });
  return fullNutrients;
}
