import React, { useState, useEffect } from "react";
import "./TDEECalculator.css";

function TDEECalculator(props) {
  // used to toggle Component between open (expanded) or close (collapsed) state
  const [isExpanded, set_isExpanded] = useState(false);

  // used to toggle form between using metric and imperial measurements
  const [useMetric, setUseMetric] = useState(false);

  // used to display TDEE result after being calculated
  const [TDEE_Result, setTDEE_Result] = useState(
    JSON.parse(localStorage.getItem("TDEE")) || null
  );

  // used to toggle "Save" button between active and inactive state
  const [isTDEE_upToDate, set_isTDEE_upToDate] = useState(
    JSON.parse(localStorage.getItem("TDEE")) &&
      JSON.parse(localStorage.getItem("TDEE")) === TDEE_Result
  );

  // used to toggle "Save" button between active and inactive state
  useEffect(() => {
    TDEE_Result === JSON.parse(localStorage.getItem("TDEE"))
      ? set_isTDEE_upToDate(true)
      : set_isTDEE_upToDate(false);
  }, [TDEE_Result]);

  // button callback to store calculated TDEE in localStorage
  function saveTDEE_Result() {
    localStorage.setItem("TDEE", JSON.stringify(TDEE_Result));
    set_isTDEE_upToDate(true);
  }

  // calculate TDEE using submitted sex, weight, height, age, and activity level
  function calculate(e) {
    e.preventDefault();

    // const sex = e.target.sex.text;
    const sex = document.querySelector("#sex").value;
    const age = e.target.age.value;
    const activityLevel = document.querySelector("#activityLevel").value;

    // weight measurement in kg
    const weight = useMetric
      ? e.target.weight_kg.value
      : e.target.weight_lb?.value * 0.45359237;

    // height measurement in cm
    const height = useMetric
      ? e.target.height_cm.value
      : e.target.height_feet.value * 30.48 +
        e.target.height_inches.value * 2.54;

    const BMR =
      sex === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    const TDEE = Math.round(BMR * activityLevel);

    setTDEE_Result(TDEE);
  }

  return (
    <div className="TDEECalculator">
      <div className="SectionHeader">
        <span>TDEE Calculator</span>
        <button
          onClick={() => {
            set_isExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "Close" : "Expand"}
        </button>
      </div>
      <div className={`Body ${isExpanded ? "Expanded" : "Collapsed"}`}>
        <p>
          This calculator tool will help you determine what your Total Daily
          Energy Expenditure (TDEE) is so you may better plan out what your
          daily macronutrient intake should be. This tool uses the Mifflin-St
          Jeor Equation.
        </p>
        <form onSubmit={calculate}>
          <div className="buttonGroup">
            <button
              onClick={() => {
                setUseMetric(false);
              }}
              className={`${useMetric ? "" : "Active"}`}
              type="button"
            >
              Imperial
            </button>
            <button
              onClick={() => {
                setUseMetric(true);
              }}
              className={`${useMetric ? "Active" : ""}`}
              type="button"
            >
              Metric
            </button>
          </div>
          <div className="fieldGroup">
            <div className="field">
              <label htmlFor="sex">Sex</label>
              <select name="sex" id="sex">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="fieldGroup">
            {useMetric ? (
              <div className="field">
                <label htmlFor="weight_kg">Weight (kg)</label>
                <input
                  type="number"
                  min="1"
                  id="weight_kg"
                  name="weight_kg"
                  placeholder="Weight in kilograms"
                  required
                />
              </div>
            ) : (
              <>
                <div className="field">
                  <label htmlFor="weight_lb">Weight (lb)</label>
                  <input
                    type="number"
                    min="1"
                    id="weight_lb"
                    name="weight_lb"
                    placeholder="Weight in pounds"
                    required
                  />
                </div>
              </>
            )}
          </div>
          <div className="fieldGroup">
            {useMetric ? (
              <div className="field">
                <label htmlFor="height_cm">Height (cm)</label>
                <input
                  type="number"
                  min="1"
                  name="height_cm"
                  id="height_cm"
                  placeholder="Height in centimeters"
                  required
                />
              </div>
            ) : (
              <>
                <div className="field">
                  <label htmlFor="height_feet">Height (feet)</label>
                  <input
                    type="number"
                    min="1"
                    name="height_feet"
                    id="height_feet"
                    placeholder="Feet"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="height_inches">Height (inches)</label>
                  <input
                    type="number"
                    min="1"
                    name="height_inches"
                    id="height_inches"
                    placeholder="Inches"
                    required
                  />
                </div>
              </>
            )}
          </div>
          <div className="fieldGroup">
            <div className="field">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                min="1"
                name="age"
                id="age"
                placeholder="Age in years"
                required
              />
            </div>
          </div>
          <div className="fieldGroup">
            <div className="field">
              <label htmlFor="activityLevel">Activity Level</label>
              <select name="activityLevel" id="activityLevel">
                <option value="1.2">Sedentary (Office Job)</option>
                <option value="1.375">
                  Lightly Active (Exercise 1-2 Days/Week)
                </option>
                <option value="1.55">
                  Moderately Active (Exercise 3-5 Days/Week)
                </option>
                <option value="1.725">Active (Exercise 6-7 Days/Week)</option>
                <option value="1.9">Very Active (Athlete)</option>
              </select>
            </div>
          </div>

          <button className="submitButton" type="submit">
            Calculate
          </button>
        </form>

        {TDEE_Result ? (
          <div className="Results">
            <p>Your TDEE is {TDEE_Result} Calories</p>

            <button
              onClick={saveTDEE_Result}
              className={`${isTDEE_upToDate ? "Saved" : "Unsaved"}`}
            >
              {`${isTDEE_upToDate ? "Saved" : "Save"}`}
            </button>

            <p>
              To set up new macronutrient goals using this calculated TDEE, open
              the Goals Tool below or go to the Tracker page to manually set
              your own goals{" "}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default TDEECalculator;
