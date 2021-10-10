const express = require("express");

// const schduleFormRoutes = require("../backend/routes/SchduleForm");
const connectDB = require("./config/db");
const app = express();

// connectDB();
app.use(express.json());
// app.use("/scheduleform/form", schduleFormRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`welcome to port${PORT}`));
