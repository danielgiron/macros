const nutritionix_key = "32d54e5d69a98a8624cc81712bb937e7";
const nutritionix_id = "f29aaa43";

async function getFoodItem(item) {
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
      query: `${item}`,
    }),
  };
  let food = "";
  await fetch(endpoint, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      food = data.foods[0];
      // console.log(data.foods[0]);
    });

  console.log("FOod: ", food);
  // if (food.message) {
  //   console.log("Food not found :/");
  // }
  return food;
}

export default getFoodItem;
