const Schedule = require("../models/scheduleModel");
const scheduleFormData = async (req, res) => {
  const {
    firstGoal,
    secondGoal,
    thirdGoal,
    forthGoal,
    fifthGoal,
    sixthGoal,
    seventhGoal,
    eighthGoal,
    ninethGoal,
    tenthGoal,
    eleventhGoal,
  } = req.body;

  const schedule = await Schedule.create({
    firstGoal,
    secondGoal,
    thirdGoal,
    forthGoal,
    fifthGoal,
    sixthGoal,
    seventhGoal,
    eighthGoal,
    ninethGoal,
    tenthGoal,
    eleventhGoal,
  });
  if (schedule) {
    res.status(201).json({
      msg: "success",
    });
  } else {
    res.status(400);
    throw new Error("schedule not found");
  }
};

module.exports = { scheduleFormData };
