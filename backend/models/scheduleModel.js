const mongoose = require("mongoose");

const scheduleSchema = mongoose.schema({
  firstGoal: {
    type: object,
    required: true,
  },
});
