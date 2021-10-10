import React from "react";
import SingleActivity from "./SingleActivity";
export default function SingleGoal({
  inputName,
  value,
  iterationName,
  index,
  activityList,
  checked,
  addInputName,
  ////////////////////////////////
  handleChange,
  handleIterations,
  handleActivityInput,
  addActivity,
  removeActivity,
}) {
  const {
    firstIterationFirstGoal,
    secondIterationFirstGoal,
    thirdIterationFirstGoal,
  } = iterationName;
  return (
    <div className="goal-container grid">
      <div>
        {index + 1 + ". " + " " + " "}
        <input
          type="checkbox"
          name={inputName}
          checked={checked}
          value={value}
          id={inputName}
          onChange={(event) => handleChange(event, index)}
        />

        <label htmlFor={inputName}>{value}</label>
      </div>
      <div>
        <span className="iteration">
          <input
            type="checkbox"
            name={firstIterationFirstGoal}
            value="Iteration1"
            id={firstIterationFirstGoal}
            onChange={(event) => handleIterations(index, event, 0)}
          />
          <label htmlFor={firstIterationFirstGoal}>Iteration 1</label>
          <input
            type="checkbox"
            name={secondIterationFirstGoal}
            value="Iteration2"
            id={secondIterationFirstGoal}
            onChange={(event) => handleIterations(index, event, 1)}
          />
          <label htmlFor={secondIterationFirstGoal}>Iteration 2</label>
          <input
            type="checkbox"
            name={thirdIterationFirstGoal}
            value="Iteration3"
            id={thirdIterationFirstGoal}
            onChange={(event) => handleIterations(index, event, 2)}
          />
          <label htmlFor={thirdIterationFirstGoal}>Iteration 3</label>
        </span>
      </div>
      <div>
        {activityList.map((activity, indexx) => {
          return (
            <SingleActivity
              key={indexx}
              activityName={activity}
              index={indexx}
              position={index}
              removeActivity={removeActivity}
            />
          );
        })}

        <li>
          <input
            type="text"
            name={addInputName}
            id=""
            onChange={handleActivityInput}
            placeholder="Add activity"
          />
          <button
            type="button"
            className="activity-btn-add"
            onClick={() => {
              addActivity(index);
            }}
          >
            Add
          </button>
        </li>
      </div>
    </div>
  );
}
