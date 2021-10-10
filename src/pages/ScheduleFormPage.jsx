import React, { useState, useEffect } from "react";
import SingleGoal from "../components/SingleGoal";
import goalList from "../data/goals";
import axios from "axios";
export default function ScheduleFormPage() {
  const [statesChecked, setStatesChecked] = React.useState(
    new Array(goalList.length).fill(false)
  );
  const [iterations, setIterations] = useState(
    new Array(goalList.length).fill([false, false, false])
  );
  const [activityList, setActivityList] = useState(
    new Array(goalList.length).fill([
      "Peer Support",
      "Team Leader Assistance",
      "Training",
    ])
  );
  const [newActivity, setNewActivity] = React.useState("");
  const [goal1Activity, setgoal1Activity] = React.useState([
    "Peer Support",
    "Team Leader Assistance",
    "Training",
  ]);
  //remove button function
  const removeActivity = (itemIndex, position) => {
    const newArray = activityList.map((item, index) => {
      if (index === position) {
        const arr = item.filter((item, index) => {
          return index !== itemIndex;
        });
        console.log(arr);
        if (position === 0) {
          setfirstGoal({ ...firstGoal, ["activity"]: arr });
        } else if (position === 1) {
          setSecondGoal({
            ...secondGoal,
            ["activity"]: arr,
          });
        } else if (position === 2) {
          setThirdGoal({
            ...thirdGoal,
            ["activity"]: arr,
          });
        } else if (position === 3) {
          setForthGoal({
            ...forthGoal,
            ["activity"]: arr,
          });
        } else if (position === 4) {
          setFifthGoal({
            ...fifthGoal,
            ["activity"]: arr,
          });
        } else if (position === 5) {
          setSixthGoal({
            ...sixthGoal,
            ["activity"]: arr,
          });
        } else if (position === 6) {
          setSeventhGoal({
            ...seventhGoal,
            ["activity"]: arr,
          });
        } else if (position === 7) {
          setEighthGoal({
            ...eighthGoal,
            ["activity"]: arr,
          });
        } else if (position === 8) {
          setNinethGoal({
            ...ninethGoal,
            ["activity"]: arr,
          });
        } else if (position === 9) {
          setTenthGoal({
            ...tenthGoal,
            ["activity"]: arr,
          });
        } else if (position === 10) {
          setEleventhGoal({
            ...eleventhGoal,
            ["activity"]: arr,
          });
        }
        return [...arr];
      } else {
        return [...item];
      }
    });

    setActivityList(newArray);
  };

  //handle add function
  const handleActivityInput = (event) => {
    const value = event.target.value;

    setNewActivity(() => value);
  };
  const addActivity = (position) => {
    const newArray = activityList.map((item, index) => {
      if (index === position) {
        if (position === 0) {
          setfirstGoal({ ...firstGoal, ["activity"]: [...item, newActivity] });
        } else if (position === 1) {
          setSecondGoal({
            ...secondGoal,
            ["activity"]: [...item, newActivity],
          });
        } else if (position === 2) {
          setThirdGoal({
            ...thirdGoal,
            ["activity"]: [...item, newActivity],
          });
        } else if (position === 3) {
          setForthGoal({
            ...forthGoal,
            ["activity"]: [...item, newActivity],
          });
        } else if (position === 4) {
          setFifthGoal({
            ...fifthGoal,
            ["activity"]: [...item, newActivity],
          });
        } else if (position === 5) {
          setSixthGoal({
            ...sixthGoal,
            ["activity"]: [...item, newActivity],
          });
        } else if (position === 6) {
          setSeventhGoal({
            ...seventhGoal,
            ["activity"]: [...item, newActivity],
          });
        } else if (position === 7) {
          setEighthGoal({
            ...eighthGoal,
            ["activity"]: [...item, newActivity],
          });
        } else if (position === 8) {
          setNinethGoal({
            ...ninethGoal,
            ["activity"]: [...item, newActivity],
          });
        } else if (position === 9) {
          setTenthGoal({
            ...tenthGoal,
            ["activity"]: [...item, newActivity],
          });
        } else if (position === 10) {
          setEleventhGoal({
            ...eleventhGoal,
            ["activity"]: [...item, newActivity],
          });
        }
        return [...item, newActivity];
      } else {
        console.log("else");
        return [...item];
      }
    });
    console.log("finish");
    setActivityList(newArray);
  };
  //////
  const [firstGoal, setfirstGoal] = useState({
    firstGoalName: "",
    iteration: [],
    activity: [...goal1Activity],
  });
  const [secondGoal, setSecondGoal] = useState({
    secondGoalName: "",
    iteration: [],
    activity: [...goal1Activity],
  });
  const [thirdGoal, setThirdGoal] = useState({
    thirdGoalName: "",
    iteration: [],
    activity: [...goal1Activity],
  });
  const [forthGoal, setForthGoal] = useState({
    forthGoalName: "",
    iteration: [],
    activity: [...goal1Activity],
  });
  const [fifthGoal, setFifthGoal] = useState({
    fifthGoalName: "",
    iteration: [],
    activity: [...goal1Activity],
  });
  const [sixthGoal, setSixthGoal] = useState({
    sixthGoalName: "",
    iteration: [],
    activity: [...goal1Activity],
  });
  const [seventhGoal, setSeventhGoal] = useState({
    seventhGoalName: "",
    iteration: [],
    activity: [...goal1Activity],
  });
  const [eighthGoal, setEighthGoal] = useState({
    eighthGoalName: "",
    iteration: [],
    activity: [...goal1Activity],
  });
  const [ninethGoal, setNinethGoal] = useState({
    ninethGoalName: "",
    iteration: [],
    activity: [...goal1Activity],
  });
  const [tenthGoal, setTenthGoal] = useState({
    tenthGoalName: "",
    iteration: [],
    activity: [...goal1Activity],
  });
  const [eleventhGoal, setEleventhGoal] = useState({
    eleventhGoalName: "",
    iteration: [],
    activity: [...goal1Activity],
  });
  const [singleGoal, setSingleGoal] = useState({
    firstGoalName: "",
    secondGoalName: "",
    thirdGoalName: "",
    forthGoalName: "",
    fifthGoalName: "",
    sixthGoalName: "",
    seventhGoalName: "",
    eighthGoalName: "",
    ninethGoalName: "",
    tenthGoalName: "",
    eleventhGoalName: "",
    iteration: "",
    activity: goal1Activity,
  });
  const iterationFunction = (item, goal, setGoal, value, index) => {
    if (item === true) {
      setGoal({
        ...goal,
        ["iteration"]: [...goal.iteration, value],
      });
    } else {
      const arr = goal.iteration.filter((item, indexx) => {
        console.log(index, indexx);
        return indexx !== index ? item : "";
      });
      setGoal(() => {
        return {
          ...goal,
          ["iteration"]: [...arr],
        };
      });
    }
  };
  const goalFunction = (name, value) => {
    if (name === "firstGoalName") {
      setfirstGoal({ ...firstGoal, [name]: value });
    } else if (name === "secondGoalName") {
      setSecondGoal({ ...secondGoal, [name]: value });
    } else if (name === "thirdGoalName") {
      setThirdGoal({ ...thirdGoal, [name]: value });
    } else if (name === "forthGoalName") {
      setForthGoal({ ...forthGoal, [name]: value });
    } else if (name === "fifthGoalName") {
      setFifthGoal({ ...fifthGoal, [name]: value });
    } else if (name === "sixthGoalName") {
      setSixthGoal({ ...sixthGoal, [name]: value });
    } else if (name === "seventhGoalName") {
      setSeventhGoal({ ...seventhGoal, [name]: value });
    } else if (name === "eighthGoalName") {
      setEighthGoal({ ...eighthGoal, [name]: value });
    } else if (name === "ninethGoalName") {
      setNinethGoal({ ...ninethGoal, [name]: value });
    } else if (name === "tenthGoalName") {
      setTenthGoal({ ...tenthGoal, [name]: value });
    } else if (name === "eleventhGoalName") {
      setEleventhGoal({ ...eleventhGoal, [name]: value });
    }
  };
  const handleChange = (event, position) => {
    const name = event.target.name;
    const value = event.target.value;
    const updatedCheckedState = statesChecked.map((item, index) =>
      index === position ? !item : item
    );
    setStatesChecked(updatedCheckedState);
    if (!statesChecked[position]) {
      setSingleGoal({ ...singleGoal, [name]: value });
      goalFunction(name, value);
    } else {
      setSingleGoal({ ...singleGoal, [name]: "" });
      goalFunction(name, "");
    }
  };

  const handleShowingGoalNameIteration = (isGoalChecked, iteration, goal) => {
    if (isGoalChecked && iteration) {
      return goal.goalName;
    }
  };
  const handleIterations = (position, event, goalIteration) => {
    const { name, value } = event.target;
    const newArray = iterations.map((iteration, aindex) => {
      if (aindex === position) {
        const arr = iteration.map((item, index) => {
          if (index === goalIteration) {
            item = !item;
            if (
              name === "firstIterationGoal1" ||
              name === "secondIterationGoal1" ||
              name === "thirdIterationGoal1"
            ) {
              console.log(index);
              iterationFunction(item, firstGoal, setfirstGoal, value, aindex);
            } else if (
              name === "firstIterationGoal2" ||
              name === "secondIterationGoal2" ||
              name === "thirdIterationGoal2"
            ) {
              iterationFunction(
                item,
                secondGoal,
                setSecondGoal,
                value,
                aindex - 1
              );
            } else if (
              name === "firstIterationGoal3" ||
              name === "secondIterationGoal3" ||
              name === "thirdIterationGoal3"
            ) {
              iterationFunction(
                item,
                thirdGoal,
                setThirdGoal,
                value,
                aindex - 2
              );
            } else if (
              name === "firstIterationGoal4" ||
              name === "secondIterationGoal4" ||
              name === "thirdIterationGoal4"
            ) {
              iterationFunction(
                item,
                forthGoal,
                setForthGoal,
                value,
                aindex - 3
              );
            } else if (
              name === "firstIterationGoal5" ||
              name === "secondIterationGoal5" ||
              name === "thirdIterationGoal5"
            ) {
              iterationFunction(
                item,
                fifthGoal,
                setFifthGoal,
                value,
                aindex - 4
              );
            } else if (
              name === "firstIterationGoal6" ||
              name === "secondIterationGoal6" ||
              name === "thirdIterationGoal6"
            ) {
              iterationFunction(
                item,
                sixthGoal,
                setSixthGoal,
                value,
                aindex - 5
              );
            } else if (
              name === "firstIterationGoal7" ||
              name === "secondIterationGoal7" ||
              name === "thirdIterationGoal7"
            ) {
              iterationFunction(
                item,
                seventhGoal,
                setSeventhGoal,
                value,
                aindex - 6
              );
            } else if (
              name === "firstIterationGoal8" ||
              name === "secondIterationGoal8" ||
              name === "thirdIterationGoal8"
            ) {
              iterationFunction(
                item,
                eighthGoal,
                setEighthGoal,
                value,
                aindex - 7
              );
            } else if (
              name === "firstIterationGoal9" ||
              name === "secondIterationGoal9" ||
              name === "thirdIterationGoal9"
            ) {
              iterationFunction(
                item,
                ninethGoal,
                setNinethGoal,
                value,
                aindex - 8
              );
            } else if (
              name === "firstIterationGoal10" ||
              name === "secondIterationGoal10" ||
              name === "thirdIterationGoal10"
            ) {
              iterationFunction(
                item,
                tenthGoal,
                setTenthGoal,
                value,
                aindex - 9
              );
            } else if (
              name === "firstIterationGoal11" ||
              name === "secondIterationGoal11" ||
              name === "thirdIterationGoal11"
            ) {
              iterationFunction(
                item,
                eleventhGoal,
                setEleventhGoal,
                value,
                aindex - 10
              );
            }
          }

          return item;
        });
        return arr;
      } else {
        return [...iteration];
      }
    });

    setIterations(newArray);
  };
  async function handleSubmit() {
    const res = await axios.post("/scheduleform/form", {
      firstGoal: firstGoal,
      secondGoal: secondGoal,
      thirdGoal: thirdGoal,
      forthGoal: forthGoal,
      fifthGoal: fifthGoal,
      sixthGoal: sixthGoal,
      seventhGoal: seventhGoal,
      eighthGoal: eighthGoal,
      ninethGoal: ninethGoal,
      tenthGoal: tenthGoal,
      eleventhGoal: eleventhGoal,
    });
    if (res.status === 200) {
      alert("Data has been saved!!");
    } else {
      alert("Plz try again");
    }
  }
  return (
    <div>
      <h2 className="scheduleform-title">ScheduleForm</h2>

      <div className="scheduleform_body">
        <div className="grid">
          <div>
            <ul>
              <li>
                <h2>Goal</h2>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <h2>Iteration</h2>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <h2>Activity</h2>
              </li>
            </ul>
          </div>
        </div>
        {goalList.map((item, index) => {
          return (
            <SingleGoal
              key={index}
              index={index}
              addInputName={item.addInputName}
              activityList={activityList[index]}
              handleChange={handleChange}
              inputName={item.inputName}
              value={item.goalName}
              checked={statesChecked[index]}
              iterationName={item.iterationName}
              handleActivityInput={handleActivityInput}
              handleIterations={handleIterations}
              addActivity={addActivity}
              removeActivity={removeActivity}
            />
          );
        })}
      </div>

      <div className="btn">
        <button className="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
