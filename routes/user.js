var express = require("express");
var router = express.Router();
const { User } = require("../model");

/* GET home page. */
router.get("/admin/login", function (req, res, next) {
  res.render("admin/login/index", { title: "Express" });
});

module.exports = router;
