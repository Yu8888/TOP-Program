import React from "react";

export default function SingleGoal({ singleGoal, handleGoal, handleTask }) {
  return (
    <li className="table-row">
      <div className="col col-1">{singleGoal.goalName}</div>
      <div className="col col-2">
        <input
          type="text"
          name="taskName"
          id=""
          placeholder="Asking questions"
          value={singleGoal.taskName}
          onChange={handleTask}
        />
      </div>
      <div className="col col-3" data-label="Amount">
        <input
          type="text"
          name="activity"
          id=""
          value={singleGoal.activity}
          placeholder="Mentoring"
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
