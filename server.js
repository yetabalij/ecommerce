//importing required packages
const express = require("express");

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello Ermias");
});

app.listen(port, () => {
  console.log(`application started to: https://localhost:${port}`);
});
