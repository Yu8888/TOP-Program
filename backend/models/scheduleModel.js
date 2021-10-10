const mongoose = require("mongoose");

const scheduleSchema = mongoose.Schema(
  {
    firstGoal: {
      firstGoalName: {
        type: String,
      },
      iteration: {
        type: Array,
      },
      activity: {
        type: Array,
      },
    },
    secondGoal: {
      secondGoalName: {
        type: String,
      },
      iteration: {
        type: Array,
      },
      activity: {
        type: Array,
      },
    },
    thirdGoal: {
      thirdGoalName: {
        type: String,
      },
      iteration: {
        type: Array,
      },
      activity: {
        type: Array,
      },
    },
    forthGoal: {
      forthGoalName: {
        type: String,
      },
      iteration: {
        type: Array,
      },
      activity: {
        type: Array,
      },
    },
    fifthGoal: {
      fifthGoalName: {
        type: String,
      },
      iteration: {
        type: Array,
      },
      activity: {
        type: Array,
      },
    },
    sixthGoal: {
      sixthGoalName: {
        type: String,
      },
      iteration: {
        type: Array,
      },
      activity: {
        type: Array,
      },
    },
    seventhGoal: {
      seventhGoalName: {
        type: String,
      },
      iteration: {
        type: Array,
      },
      activity: {
        type: Array,
      },
    },
    eighthGoal: {
      eighthGoalName: {
        type: String,
      },
      iteration: {
        type: Array,
      },
      activity: {
        type: Array,
      },
    },
    ninethGoal: {
      ninethGoalName: {
        type: String,
      },
      iteration: {
        type: Array,
      },
      activity: {
        type: Array,
      },
    },
    tenthGoal: {
      tenthGoalName: {
        type: String,
      },
      iteration: {
        type: Array,
      },
      activity: {
        type: Array,
      },
    },
    eleventhGoal: {
      eleventhGoalName: {
        type: String,
      },
      iteration: {
        type: Array,
      },
      activity: {
        type: Array,
      },
    },
  },
  {
    timestamps: true,
  }
);
const Schedule = mongoose.model("Schedule", scheduleSchema);
module.exports = Schedule;
