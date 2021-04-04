// importing required packages
const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const userRoute = require("./routes/user");

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(bodyparser.json());

//router middlewares
app.use("/api", userRoute);

module.exports = app;
