//importing required packages
const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

//database connection
mongoose
  .connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database connected");
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`application started to: https://localhost:${port}`);
});
