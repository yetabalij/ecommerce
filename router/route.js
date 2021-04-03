//import required packages and modules
const express = require("express");

//creating routing instance
const route = express.Router();

//get route
route.get("/", (req, res) => {
  res.send("Hello Ermias Tsegu");
});

module.exports = route;
