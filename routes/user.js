//import required packages and modules
const express = require("express");
const { getUser } = require("./../controllers/user");

//creating routing instance
const route = express.Router();

//get route
route.get("/", getUser);

module.exports = route;
