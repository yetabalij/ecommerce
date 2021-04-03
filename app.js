const express = require("express");
const morgan = require("morgan");

const app = express();

//middlewares
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello Ermias");
});

module.exports = app;
