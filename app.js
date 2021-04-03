// importing required packages
const express = require("express");
const morgan = require("morgan");
const route = require("./router/route");

const app = express();

//middlewares
app.use(morgan("dev"));

//router middlewares
app.use("/api", route);

module.exports = app;
