//importing required packages
const app = require("./app");
const config = require("./config");

app.listen(config.PORT, () => {
  console.log(`application started to: https://localhost:${config.PORT}`);
});
