// importing required packages
const express = require("express");
const morgan = require("morgan");
const userRoute = require("./routes/user");

const app = express();

//middlewares
app.use(morgan("dev"));

//router middlewares
app.use("/api", userRoute);

module.exports = app;
