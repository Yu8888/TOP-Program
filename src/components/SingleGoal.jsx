import React from "react";

export default function SingleGoal({
  singleGoal,
  handleGoal,
  handleTask,
  defaultValue,
  taskInputName,
  activityDefaultValue,
  activityInputName,
}) {
  return (
    <li className="table-row">
      <div className="col col-1">{singleGoal.goalName}</div>
      <div className="col col-2" data-label="Task">
        <input
          type="text"
          name={taskInputName}
          id={taskInputName}
          placeholder="Asking questions"
          defaultValue={defaultValue}
          onChange={handleTask}
        />
      </div>
      <div className="col col-3" data-label="Activity">
        <input
          type="text"
          name={activityInputName}
          id={activityInputName}
          placeholder="Mentoring"
          defaultValue={activityDefaultValue}
          onChange={handleTask}
        />
      </div>
      <div className="col col-4">
        <button
          onClick={() => {
            handleGoal(singleGoal);
          }}
          className="scheduleform-choose-button "
        >
          Choose
        </button>
      </div>
    </li>
  );
}
