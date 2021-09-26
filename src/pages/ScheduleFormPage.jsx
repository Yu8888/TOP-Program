import React, { useState } from "react";
import SingleGoal from "../components/SingleGoal";
export default function ScheduleFormPage() {
  const [goalsList, setGoalsList] = useState([]);

  const [singleGoal, setSingleGoal] = useState({
    goalName: "Understand the norms",
    taskName: "Peer Support",
    activity: "Training",
  });
  const [secondGoal, setsecondGoal] = useState({
    goalName: "Knowing git",
    taskName1: "Induction",
    activity1: "Pair Programming",
  });
  const [thirdGoal, setthirdGoal] = useState({
    goalName: "Knowing React",
    taskName2: "Team Leader Assistance",
    activity2: "Mentoring",
  });
  const [forthGoal, setforthGoal] = useState({
    goalName: "Knowing Jest",
    taskName3: "Team Leader Assistance",
    activity3: "Mentoring",
  });
  const [fifthGoal, setfifthGoal] = useState({
    goalName: "Knowing Java",
    taskName4: "Team Leader Assistance",
    activity4: "Mentoring",
  });
  function handleGoal(rowGoal) {
    console.log(rowGoal);
    setGoalsList((prev) => {
      console.log([...prev, rowGoal]);
      return [...prev, rowGoal];
    });
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name + value);
    if (name === "taskName" || name === "activity") {
      setSingleGoal({ ...singleGoal, [name]: value });
    } else if (name === "taskName1" || name === "activity1") {
      console.log("taskname111111");
      setsecondGoal({ ...secondGoal, [name]: value });
    } else if (name === "taskName2" || name === "activity2") {
      setthirdGoal({ ...thirdGoal, [name]: value });
    } else if (name === "taskName3" || name === "activity3") {
      setforthGoal({ ...forthGoal, [name]: value });
    } else if (name === "taskName4" || name === "activity4") {
      setfifthGoal({ ...fifthGoal, [name]: value });
    }
  }
  function showTasksList(goal) {
    if (goal.taskName) {
      return singleGoal.taskName;
    } else if (goal.taskName1) {
      return secondGoal.taskName1;
    } else if (goal.taskName2) {
      return thirdGoal.taskName2;
    } else if (goal.taskName3) {
      return forthGoal.taskName3;
    } else if (goal.taskName4) {
      return fifthGoal.taskName4;
    }
  }
  function showActivitysList(goal) {
    if (goal.activity) {
      return singleGoal.activity;
    } else if (goal.activity1) {
      return secondGoal.activity1;
    } else if (goal.activity2) {
      return thirdGoal.activity2;
    } else if (goal.activity3) {
      return forthGoal.activity3;
    } else if (goal.activity4) {
      return fifthGoal.activity4;
    }
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
            taskInputName="taskName"
            activityInputName="activity"
            singleGoal={singleGoal}
            handleGoal={handleGoal}
            handleTask={handleChange}
            defaultValue="Peer Support"
            activityDefaultValue="Training"
          />
          <SingleGoal
            taskInputName="taskName1"
            activityInputName="activity1"
            singleGoal={secondGoal}
            handleGoal={handleGoal}
            handleTask={handleChange}
            defaultValue="Induction"
            activityDefaultValue="Pair Programming"
          />
          <SingleGoal
            taskInputName="taskName2"
            activityInputName="activity2"
            singleGoal={thirdGoal}
            handleGoal={handleGoal}
            handleTask={handleChange}
            defaultValue="Team Leader Assistance"
            activityDefaultValue="Mentoring"
          />
          <SingleGoal
            taskInputName="taskName3"
            activityInputName="activity3"
            singleGoal={forthGoal}
            handleGoal={handleGoal}
            handleTask={handleChange}
            defaultValue="Team Leader Assistance"
            activityDefaultValue="Mentoring"
          />
          <SingleGoal
            taskInputName="taskName4"
            activityInputName="activity4"
            singleGoal={fifthGoal}
            handleGoal={handleGoal}
            handleTask={handleChange}
            defaultValue="Team Leader Assistance"
            activityDefaultValue="Mentoring"
          />
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
          {goalsList.map((goal, index) => {
            return (
              <li className="table-row" key={index}>
                <div className="col col-1">{goal.goalName}</div>
                <div className="col col-2">{showTasksList(goal)}</div>
                <div className="col col-3">{showActivitysList(goal)}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
