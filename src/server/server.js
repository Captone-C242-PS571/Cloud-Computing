const express = require("express");
const cors = require("cors");
const authRoute = require("../routes/auth-route.js");
const db = require("../config/firebase.js");

const app = express();
app.use(cors());
app.use(express.json());

const host = "localhost";
const port = 3000;

app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Rest API for SleepWell Capstone Project - Bangkit 2024");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://${host}:${port}`);
});
