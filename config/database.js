var Sequelize = require("sequelize");

const connection = new Sequelize("caligulas", "root", "", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = connection;
