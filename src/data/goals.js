const { model } = require("mongoose");

const goalList = [
  {
    inputName: "firstGoalName",
    addInputName: "inputNewActivityGoal1",
    goalName: "Understanding team norms",
    iterationName: {
      firstIterationFirstGoal: "firstIterationGoal1",
      secondIterationFirstGoal: "secondIterationGoal1",
      thirdIterationFirstGoal: "thirdIterationGoal1",
    },
  },
  {
    inputName: "secondGoalName",
    addInputName: "inputNewActivityGoal2",
    goalName: "Understanding team technology",
    iterationName: {
      firstIterationFirstGoal: "firstIterationGoal2",
      secondIterationFirstGoal: "secondIterationGoal2",
      thirdIterationFirstGoal: "thirdIterationGoal2",
    },
  },
  {
    inputName: "thirdGoalName",
    addInputName: "inputNewActivityGoal3",
    goalName: "Understanding company culture",
    iterationName: {
      firstIterationFirstGoal: "firstIterationGoal3",
      secondIterationFirstGoal: "secondIterationGoal3",
      thirdIterationFirstGoal: "thirdIterationGoal3",
    },
  },
  {
    inputName: "forthGoalName",
    addInputName: "inputNewActivityGoal4",
    goalName: "Understand what work to do and when",
    iterationName: {
      firstIterationFirstGoal: "firstIterationGoal4",
      secondIterationFirstGoal: "secondIterationGoal4",
      thirdIterationFirstGoal: "thirdIterationGoal4",
    },
  },
  {
    inputName: "fifthGoalName",
    addInputName: "inputNewActivityGoal5",
    goalName:
      "Understand other’s expectations of your own role’s responsibilities",
    iterationName: {
      firstIterationFirstGoal: "firstIterationGoal5",
      secondIterationFirstGoal: "secondIterationGoal5",
      thirdIterationFirstGoal: "thirdIterationGoal5",
    },
  },
  {
    inputName: "sixthGoalName",
    addInputName: "inputNewActivityGoal6",
    goalName: "Understand the project structure and aims and the implications",
    iterationName: {
      firstIterationFirstGoal: "firstIterationGoal6",
      secondIterationFirstGoal: "secondIterationGoal6",
      thirdIterationFirstGoal: "thirdIterationGoal6",
    },
  },
  {
    inputName: "seventhGoalName",
    addInputName: "inputNewActivityGoal7",
    goalName: "Understand how to code and test to the team’s expectations",
    iterationName: {
      firstIterationFirstGoal: "firstIterationGoal7",
      secondIterationFirstGoal: "secondIterationGoal7",
      thirdIterationFirstGoal: "thirdIterationGoal7",
    },
  },
  {
    inputName: "eighthGoalName",
    addInputName: "inputNewActivityGoal8",
    goalName: "Understand and meet the team’s standards of work quality",
    iterationName: {
      firstIterationFirstGoal: "firstIterationGoal8",
      secondIterationFirstGoal: "secondIterationGoal8",
      thirdIterationFirstGoal: "thirdIterationGoal8",
    },
  },
  {
    inputName: "ninethGoalName",
    addInputName: "inputNewActivityGoal9",
    goalName: "Understand and show the agile mind set",
    iterationName: {
      firstIterationFirstGoal: "firstIterationGoal9",
      secondIterationFirstGoal: "secondIterationGoal9",
      thirdIterationFirstGoal: "thirdIterationGoal9",
    },
  },
  {
    inputName: "tenthGoalName",
    addInputName: "inputNewActivityGoal10",
    goalName:
      "Know how to use artefacts, tools, technology and techniques that are part of the team’s development process",
    iterationName: {
      firstIterationFirstGoal: "firstIterationGoal10",
      secondIterationFirstGoal: "secondIterationGoal10",
      thirdIterationFirstGoal: "thirdIterationGoal10",
    },
  },
  {
    inputName: "eleventhGoalName",
    addInputName: "inputNewActivityGoal11",
    goalName: "Understand the project domain knowledge and terminology",
    iterationName: {
      firstIterationFirstGoal: "firstIterationGoal11",
      secondIterationFirstGoal: "secondIterationGoal11",
      thirdIterationFirstGoal: "thirdIterationGoal11",
    },
  },
];

export default goalList;
