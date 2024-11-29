const express = require("express");
const cors = require("cors");
<<<<<<< HEAD:src/servers/server.js
const downloadRoutes = require('../routes/downloadRoutes'); 
=======
const authRoute = require("../routes/auth-route.js");
const db = require("../config/firebase.js");
>>>>>>> 5fb985705df9820282fa564e627fcff4dced9baa:src/server/server.js

const app = express();
app.use(cors());
app.use(express.json());

const host = "localhost";
const port = 3000;

app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Rest API for SleepWell Capstone Project - Bangkit 2024");
});
app.use("/download-model", downloadRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port http://${host}:${port}`);
});
