const connection = require("./config/database");
connection
  .authenticate()
  .then(() => {
    console.log("Connection made successfully.");
  })
  .catch((err) => console.log(err));
