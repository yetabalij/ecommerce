// importing required packages
const express = require("express");
const morgan = require("morgan");
const cookieParser = require('cookie-parser')
const userRoute = require("./routes/user");

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser())

//router middlewares
app.use("/api", userRoute);

module.exports = app;
