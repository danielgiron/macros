export function newTodaysLog(
  previousTodaysLog = { goals: { calories: 0, protein: 0, carbs: 0, fat: 0 } }
) {
  return {
    date: new Date().toDateString(),
    mealsEaten: [],
    macrosConsumed: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    },
    goals: {
      calories: +previousTodaysLog.goals.calories || 0,
      protein: +previousTodaysLog.goals.protein || 0,
      carbs: +previousTodaysLog.goals.carbs || 0,
      fat: +previousTodaysLog.goals.fat || 0,
    },
    previousLogDate: previousTodaysLog.date || null,
  };
}

export function prepareLogs() {
  if (!localStorage.getItem("previousLogs")) {
    console.log(
      "No previous logs found in localStorage. Setting up 'previousLogs'."
    );
    localStorage.setItem("previousLogs", JSON.stringify([]));
  }

  if (!localStorage.getItem("todaysLog")) {
    console.log(
      "No 'todaysLog' found in localStorage. Setting up 'todaysLog'."
    );
    localStorage.setItem("todaysLog", JSON.stringify(newTodaysLog()));
  }

  let previousLogs = JSON.parse(localStorage.getItem("previousLogs"));
  let todaysLog = JSON.parse(localStorage.getItem("todaysLog"));

  if (todaysLog.date === new Date().toDateString()) {
    console.log("Today's log exists. Completing function call.");
  } else {
    console.log("Date has changed, new 'todaysLog' needed. Updating logs...");

    let calories = 0;
    let protein = 0;
    let carbs = 0;
    let fat = 0;

    for (let meal of todaysLog.mealsEaten) {
      calories += meal.mealCalories;
      protein += meal.mealProtein;
      carbs += meal.mealCarbs;
      fat += meal.mealFat;
    }

    todaysLog.macrosConsumed = {
      calories,
      protein,
      carbs,
      fat,
    };

    previousLogs.push(todaysLog);
    todaysLog = newTodaysLog(todaysLog);
    localStorage.setItem("previousLogs", JSON.stringify(previousLogs));
    localStorage.setItem("todaysLog", JSON.stringify(todaysLog));
  }

  return { todaysLog, previousLogs };
}
