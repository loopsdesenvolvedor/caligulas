const Sequelize = require("sequelize");
const connection = require("../config/database");

const User = require("./User");
const Video = require("./Video");
const Category = require("./Category");

Category.hasMany(Video, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "CASCADE",
});
Video.belongsTo(Category, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "CASCADE",
});

User.hasMany(Video, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "CASCADE",
});
Video.belongsTo(User, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "CASCADE",
});

connection
  .sync()
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.error("Error creating database & tables:", err);
  });

module.exports = { User, Video, Category };
