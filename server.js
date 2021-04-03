//importing required packages
const express = require("express");
const morgan = require("morgan");
const config = require("./config");

const app = express();

//middlewares
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello Ermias");
});

app.listen(config.PORT, () => {
  console.log(`application started to: https://localhost:${config.PORT}`);
});
