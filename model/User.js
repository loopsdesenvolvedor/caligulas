const Sequelize = require("sequelize");
const connection = require("../config/database");

const User = connection.define("users", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
