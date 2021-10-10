const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const app = express();
const schduleFormRoutes = require("./backend/routes/SchduleForm");
mongoose.connect(
  "mongodb+srv://Dennis:1234567890@cluster0.afadg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",

  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb connected!!!!!!!!!");
});

const path = require("path");
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));
app.use("/scheduleform/form", schduleFormRoutes);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`welcome ur listening at port ${PORT}`);
});
