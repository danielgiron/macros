import RecipeEntry from "./RecipeEntry";
import SelectableItem from "./SelectableItem";
import { v4 as uuidv4 } from "uuid";

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

export function generateRecipeEntries(recipes, deleteRecipe) {
  const recipeEntries = recipes.map((recipe) => {
    return (
      <RecipeEntry
        key={recipe.id}
        recipe={recipe}
        deleteRecipe={deleteRecipe}
      />
    );
  });
  return recipeEntries;
}

/////////////////////////////////////////// NEWRECIPE.JS

export const measures = [
  { name: "g", gram_weight: 1 },
  { name: "oz", gram_weight: 28.35 },
  { name: "tbsp", gram_weight: 12.5 },
  { name: "tsp", gram_weight: 4.2 },
  { name: "cup", gram_weight: 128 },
  { name: "lb", gram_weight: 453.6 },
  { name: "serving", gram_weight: null },
];

export function getCategorizedCollection(
  collection,
  selectedItems,
  setSelectedItems
) {
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
    return (
      <SelectableItem
        key={item.id}
        item={item}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    );
  });
  const BakedGoodsCollection = BakedGoodsItems.map((item) => {
    return (
      <SelectableItem
        key={item.id}
        item={item}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    );
  });
  const MeatCollection = MeatItems.map((item) => {
    return (
      <SelectableItem
        key={item.id}
        item={item}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    );
  });
  const MiscellaneousCollection = MiscellaneousItems.map((item) => {
    return (
      <SelectableItem
        key={item.id}
        item={item}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    );
  });
  const ProduceCollection = ProduceItems.map((item) => {
    return (
      <SelectableItem
        key={item.id}
        item={item}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    );
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

export function compileNewRecipe(RecipeName, NServings, items) {
  let totalCalories = 0;
  let totalProtein = 0;
  let totalCarb = 0;
  let totalFat = 0;
  for (let item of items) {
    if (item.measure_weight) {
      // the case in which the selected measure is  "tsp", "cup", etc.
      totalCalories +=
        item.macrosPerGram.calories * item.quantity * item.measure_weight;
      totalProtein +=
        item.macrosPerGram.protein * item.quantity * item.measure_weight;
      totalCarb +=
        item.macrosPerGram.carb * item.quantity * item.measure_weight;
      totalFat += item.macrosPerGram.fat * item.quantity * item.measure_weight;
    } else {
      // the case in which the selected measure is "serving"
      totalCalories +=
        item.macrosPerGram.calories * item.quantity * item.serving_weight_grams;
      totalProtein +=
        item.macrosPerGram.protein * item.quantity * item.serving_weight_grams;
      totalCarb +=
        item.macrosPerGram.carb * item.quantity * item.serving_weight_grams;
      totalFat +=
        item.macrosPerGram.fat * item.quantity * item.serving_weight_grams;
    }
  }

  const newRecipe = {
    recipeName: RecipeName,
    totalCalories,
    totalProtein,
    totalCarb,
    totalFat,
    category: "Miscellaneous",
    servings: +NServings,
    id: uuidv4(),
    items: items,
    steps: [],
  };

  return newRecipe;
}
