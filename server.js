// const express = require("express");

// // const schduleFormRoutes = require("../backend/routes/SchduleForm");
// const connectDB = require("./config/db");
// const app = express();

// // connectDB();
// app.use(express.json());
// // app.use("/scheduleform/form", schduleFormRoutes);

// const PORT = 5000;
// app.listen(PORT, () => console.log(`welcome to port${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const app = express();
// const uri = process.env.MONGODB_URI;

mongoose.connect(
  "mongodb+srv://Dennis:1234567890@cluster0.afadg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",

  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb connected!!!!!!!!!");
});
// app.use(cors());

app.use(express.json());

app.listen(PORT, () => {
  console.log(`welcome ur listening at port ${PORT}`);
});
