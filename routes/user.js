//import required packages and modules
const express = require("express");
const { signup } = require("./../controllers/user");

//creating routing instance
const route = express.Router();

//get route
route.post("/signup", signup);

module.exports = route;
