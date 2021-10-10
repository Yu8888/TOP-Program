const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const schduleFormRoutes = require("../backend/routes/SchduleForm");
const connectDB = require("./config/db");
const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use("/scheduleform/form", schduleFormRoutes);

const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`welcome to port${PORT}`));
