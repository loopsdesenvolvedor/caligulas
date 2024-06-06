const Sequelize = require("sequelize");
const connection = require("../config/database");

const Video = connection.define("videos", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  banner: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  video: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  time: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Video;
