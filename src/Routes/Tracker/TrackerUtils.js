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
      calories: +previousTodaysLog.goals.calories || 1,
      protein: +previousTodaysLog.goals.protein || 1,
      carbs: +previousTodaysLog.goals.carbs || 1,
      fat: +previousTodaysLog.goals.fat || 1,
    },
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
      calories: calories.toFixed(2),
      protein: protein.toFixed(2),
      carbs: carbs.toFixed(2),
      fat: fat.toFixed(2),
    };

    previousLogs.push(todaysLog);
    todaysLog = newTodaysLog(todaysLog);
    localStorage.setItem("previousLogs", JSON.stringify(previousLogs));
    localStorage.setItem("todaysLog", JSON.stringify(todaysLog));
  }

  return { todaysLog, previousLogs };
}

/////////////////////////////////   TimeSeriesGraph  ///////////////////////////////////

export function formatDate(date) {
  const months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  const month = months[date.split(" ")[1]];
  const day = date.split(" ")[2];
  const year = date.split(" ")[3];
  return `${year}-${month}-${day}`;
}

export function populateColumns(timeFrame, logs) {
  // Data that will be passed into <TimeSeriesGraph /> to generate the graph
  let columns = [["x"], ["Calories"], ["Protein"], ["Carbs"], ["Fat"]];

  try {
    for (let index = logs.length - 1; columns[0].length < timeFrame; index--) {
      columns[0].push(formatDate(logs[index].date));
      columns[1].push(
        (logs[index].macrosConsumed.calories / logs[index].goals.calories) * 100
      );
      columns[2].push(
        (logs[index].macrosConsumed.protein / logs[index].goals.protein) * 100
      );
      columns[3].push(
        (logs[index].macrosConsumed.carbs / logs[index].goals.carbs) * 100
      );
      columns[4].push(
        (logs[index].macrosConsumed.fat / logs[index].goals.fat) * 100
      );
    }
  } catch {
    console.log("Not enough data to fill time frame");
  }

  return columns;
}

////////////////////////////////// PreviousLogs.js /////////////////////////////////////

export function generateLogList(previousLogs, activeLog, setActiveLog) {
  const logList = previousLogs.map((log, index) => {
    return (
      <div
        className={`logEntry ${activeLog === log ? "Active" : ""}`}
        key={index}
        onClick={() => {
          setActiveLog(log);
          console.log("Previous Log Selected: ", log);
        }}
      >
        {log.date}
      </div>
    );
  });

  return logList;
}
