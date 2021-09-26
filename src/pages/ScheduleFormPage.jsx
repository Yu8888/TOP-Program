import React, { useState } from "react";
import SingleGoal from "../components/SingleGoal";
export default function ScheduleFormPage() {
  const [goalsList, setGoalsList] = useState([]);
  const [singleGoal, setSingleGoal] = useState({
    goalName: "Understand the norms",
    taskname: "",
    activity: "",
  });
  function handleGoal(rowGoal) {
    console.log(rowGoal);
    const newSingleGoal = {
      ...singleGoal,
      id: new Date().getTime().toString(),
    };
    setGoalsList([...goalsList, newSingleGoal]);
    console.log(goalsList);
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name + event.target.value);
    setSingleGoal({ ...singleGoal, [name]: value });
  }
  return (
    <div>
      <div className="container">
        <h2>ScheduleForm</h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Goals</div>
            <div className="col col-2">Tasks</div>
            <div className="col col-3">Activity</div>
            <div className="col col-4">Choose</div>
          </li>
          <SingleGoal
            singleGoal={singleGoal}
            handleGoal={handleGoal}
            handleTask={handleChange}
          />
          {/* <SingleGoal goal="Understand the norms" handleGoal={handleGoal} />
          <SingleGoal goal="Understand the norms" handleGoal={handleGoal} /> */}
        </ul>
      </div>
      <div className="container show-container">
        <ul className="responsive-table">
          <h1>Showing Goals</h1>
          <li className="table-header">
            <div className="col col-1">Goals</div>
            <div className="col col-2">Tasks</div>
            <div className="col col-3">Activity</div>
          </li>
          {goalsList.map((goal) => {
            return (
              <li className="table-row" key={new Date().getTime().toString()}>
                <div className="col col-1">{goal.goalname}</div>
                <div className="col col-2">{goal.taskname}</div>
                <div className="col col-3">{goal.activity}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
