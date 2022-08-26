import React, { useState, useEffect } from "react";
import "./GoalsCalculator.css";

function GoalsCalculator(props) {
  const [isExpanded, set_isExpanded] = useState(false);
  const [weightGoal, setWeightGoal] = useState("maintenance");
  const [calculatorMode, setCalculatorMode] = useState("maintenance");

  const TDEE = JSON.parse(localStorage.getItem("TDEE") || 2000);

  function calculateMacros(e) {
    e.preventDefault();
    alert("Submitted macros calculator form");
  }

  return (
    <div className="GoalsCalculator">
      <div className="SectionHeader">
        <span>Macro Calculator</span>
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
          This tool is aimed at helping you figure out what kind of
          macronutrient goal targets are appropriate for you.
        </p>{" "}
        <p>
          The options below have been generated using general guidelines to help
          you achieve your goals based on your calculated TDEE of {TDEE}{" "}
          calories. Select an option to learn more.
        </p>
        <div className="GoalContainer">
          <div className="buttonGroup">
            <button
              className={`${weightGoal === "loss" ? "Active" : ""}`}
              onClick={() => {
                setWeightGoal("loss");
              }}
            >
              Weight Loss
            </button>
            <button
              className={`${weightGoal === "maintenance" ? "Active" : ""}`}
              onClick={() => {
                setWeightGoal("maintenance");
              }}
            >
              Maintenance
            </button>
            <button
              className={`${weightGoal === "gain" ? "Active" : ""}`}
              onClick={() => {
                setWeightGoal("gain");
              }}
            >
              Weight Gain
            </button>
          </div>
          {weightGoal === "loss" ? (
            <>
              <div className="SectionHeader">Losing Weight</div>
              <p>
                As a general guideline for healthy individuals, it is
                recommended to take in 40% of calories from carbohydrates, 40%
                from protein, and 20% from (primarily unsaturated) fats. For
                those looking to preserve muscle mass and cut down on body fat
                as part of a weight lifting program, you might opt to take in{" "}
                <b>
                  40% of calories from carbohydrates, 40% from protein, and 20%
                  from fat
                </b>
                . You may tweak these figures according to your specific needs.
              </p>
              <p>
                Because changes in weight are generally the result of a caloric
                defecit or surplus, the number one influence in your weight
                management journey will be the amount of calories you consume.
                With the goal of losing weight in mind, you should eat
                approximately <b>{Math.floor(TDEE * 0.8)} calories per day</b>,
                or perhaps more forgivingly, roughly{" "}
                {Math.floor(TDEE * 0.8 * 7)} calories a week—how you split those
                calories up across the seven days is up to you. A healthy and
                safe caloric defecit will put you at about 200-500 calories
                below your daily TDEE, or at about a rate of 0.5 to 1 percent
                body fat loss per week.
              </p>
              <p>
                Based on your TDEE, your weight-loss goal, and the figures
                bolded above, your macronutrient targets might look like this:
              </p>

              <div className="macroTargets">
                <div className="target carbs">
                  <span className="label">Carbs</span>
                  <span className="value">
                    {Math.round((TDEE * 0.8 * 0.4) / 4)}g
                  </span>
                </div>
                <div className="target protein">
                  <span className="label">Protein</span>
                  <span className="value">
                    {Math.round((TDEE * 0.8 * 0.4) / 4)}g
                  </span>
                </div>
                <div className="target fats">
                  <span className="label">Fats</span>
                  <span className="value">
                    {Math.round((TDEE * 0.8 * 0.2) / 9)}g
                  </span>
                </div>
                <div className="target calories">
                  <span className="label">Calories</span>
                  <span className="value">{Math.round(TDEE * 0.8)}</span>
                </div>
              </div>
            </>
          ) : null}
          {weightGoal === "maintenance" ? (
            <>
              <div className="SectionHeader">Maintaining Your Weight</div>
              <p>
                When trying to maintain your weight, it is recommended to obtain{" "}
                <b>
                  40% of your calories come from carbohydrates, 30% from
                  protein, and 30% from (primarily unsaturated) fats.
                </b>
              </p>
              <p>
                Because changes in weight are generally the result of a caloric
                defecit or surplus, the number one influence in your weight
                management journey will be the amount of calories you consume.
                With the goal of maintaining your current weight in mind, you
                should eat approximately <b>{TDEE} calories per day</b>, or
                roughly {TDEE * 7} calories a week—how you split those calories
                up across the seven days is up to you.
              </p>
              <p>
                Based on your TDEE, your weight-maintenance goal, and the
                figures bolded above, your macronutrient targets might look like
                this:
              </p>

              <div className="macroTargets">
                <div className="target carbs">
                  <span className="label">Carbs</span>
                  <span className="value">
                    {Math.round((TDEE * 1 * 0.4) / 4)}g
                  </span>
                </div>
                <div className="target protein">
                  <span className="label">Protein</span>
                  <span className="value">
                    {Math.round((TDEE * 1 * 0.3) / 4)}g
                  </span>
                </div>
                <div className="target fats">
                  <span className="label">Fats</span>
                  <span className="value">
                    {Math.round((TDEE * 1 * 0.3) / 9)}g
                  </span>
                </div>
                <div className="target calories">
                  <span className="label">Calories</span>
                  <span className="value">{Math.round(TDEE * 1)}</span>
                </div>
              </div>
            </>
          ) : null}
          {weightGoal === "gain" ? (
            <>
              <div className="SectionHeader">Gaining Weight</div>
              <p>
                As a general guideline for healthy individuals, it is
                recommended to take in{" "}
                <b>
                  30% of calories from carbohydrates, 40% from protein, and 40%
                  from (primarily unsaturated) fats
                </b>
                . For those looking to preserve muscle mass and cut down on body
                fat as part of a weight lifting program, you might opt to take
                in 30% of calories from carbohydrates, 40% from protein, and 30%
                from fat. You may tweak these figures according to your specific
                needs.
              </p>
              <p>
                Because changes in weight are generally the result of a caloric
                defecit or surplus, the number one influence in your weight
                management journey will be the amount of calories you consume.
                With the goal of gaining weight in mind, you should eat
                approximately <b>{Math.floor(TDEE * 1.2)} calories per day</b>,
                or roughly {Math.floor(TDEE * 1.2 * 7)} calories a week—how you
                split up those calories across the seven days is up to you. A
                healthy caloric surplus will put you at about 300-500 calories
                above your daily TDEE.
              </p>
              <p>
                Based on your TDEE, your weight-gain goal, and the figures
                bolded above, your macronutrient targets might look like this:
              </p>
              <div className="macroTargets">
                <div className="target carbs">
                  <span className="label">Carbs</span>
                  <span className="value">
                    {Math.round((TDEE * 1.2 * 0.4) / 4)}g
                  </span>
                </div>
                <div className="target protein">
                  <span className="label">Protein</span>
                  <span className="value">
                    {Math.round((TDEE * 1.2 * 0.3) / 4)}g
                  </span>
                </div>
                <div className="target fats">
                  <span className="label">Fats</span>
                  <span className="value">
                    {Math.round((TDEE * 1.2 * 0.3) / 9)}g
                  </span>
                </div>
                <div className="target calories">
                  <span className="label">Calories</span>
                  <span className="value">{Math.round(TDEE * 1.2)}</span>
                </div>
              </div>
            </>
          ) : null}
        </div>
        <div className="customFiguresCalculator">
          <p>
            If you would like to configure your macronutrient targets to your
            own specific needs, you may use this calculator below
          </p>
          <form onSubmit={calculateMacros}>
            <div className="buttonGroup">
              <button
                type="button"
                className={`${calculatorMode === "deficit" ? "Active" : ""}`}
                onClick={() => {
                  setCalculatorMode("deficit");
                }}
              >
                Defecit
              </button>
              <button
                type="button"
                className={`${
                  calculatorMode === "maintenance" ? "Active" : ""
                }`}
                onClick={() => {
                  setCalculatorMode("maintenance");
                }}
              >
                Maintenance
              </button>
              <button
                type="button"
                className={`${calculatorMode === "surplus" ? "Active" : ""}`}
                onClick={() => {
                  setCalculatorMode("surplus");
                }}
              >
                Surplus
              </button>
            </div>

            <div className="fieldGroup">
              <div className="field">
                <label htmlFor="startingTDEE">Starting TDEE</label>
                <input
                  type="number"
                  id="startingTDEE"
                  name="startingTDEE"
                  min="0"
                  placeholder="TDEE"
                  defaultValue={TDEE}
                  required
                />
              </div>
            </div>
            <div className="fieldGroup">
              <div className="field">
                <label htmlFor="shift">Calorie Shift</label>
                <input
                  type="number"
                  id="shift"
                  name="shift"
                  min="0"
                  placeholder="Shift to +/- from TDEE"
                  //   defaultValue={0}
                  required
                />
              </div>
            </div>
            <div className="fieldGroup">
              <div className="field">
                <label htmlFor="carbs">Calories from Carbs(%)</label>
                <input
                  type="number"
                  id="carbs"
                  name="carbs"
                  min="0"
                  placeholder="Percentage"
                  //   defaultValue={40}
                  required
                />
              </div>
            </div>
            <div className="fieldGroup">
              <div className="field">
                <label htmlFor="protein">Calories from Protein(%)</label>
                <input
                  type="number"
                  id="protein"
                  name="protein"
                  min="0"
                  placeholder="Percentage"
                  //   defaultValue={30}
                  required
                />
              </div>
            </div>
            <div className="fieldGroup">
              <div className="field">
                <label htmlFor="fat">Calories from Fat(%)</label>
                <input
                  type="number"
                  id="fat"
                  name="fat"
                  min="0"
                  placeholder="Percentage"
                  //   defaultValue={30}
                  required
                />
              </div>
            </div>
            <button type="submit">Calculate</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default GoalsCalculator;
