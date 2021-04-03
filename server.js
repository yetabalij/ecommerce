//importing required packages
const express = require("express");
const morgan = require("morgan");

const app = express();

const port = 5000;

//middlewares
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello Ermias");
});

app.listen(port, () => {
  console.log(`application started to: https://localhost:${port}`);
});
