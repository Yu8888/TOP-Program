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
  schedule
    .save()
    .then(() => {
      res.status(200).json("okk");
    })
    .catch((err) => {
      res.status(403).json({ msg: err });
    });
};

module.exports = { scheduleFormData };
