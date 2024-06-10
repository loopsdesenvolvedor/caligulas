var express = require("express");
var router = express.Router();
const Category = require("../model/Category");
const Video = require("../model/Video");
const slugify = require("slugify");
const upload = require("../config/multer");

router.get("/admin/dashboard", function (req, res, next) {
  Category.findAll().then((categories) => {
    res.render("admin/dashboard", {
      title: "Caligulas | Dashboard",
      categories,
    });
  });
});

router.post("/admin/dashboard/categories", (req, res) => {
  const title = req.body.title;
  if (title != undefined) {
    Category.create({
      title: title,
      slug: slugify(title),
    }).then(() => {
      res.redirect("/admin/dashboard");
    });
  } else {
    res.redirect("/admin/dashboard");
  }
});

router.post(
  "/admin/dashboard/video",
  upload.fields([
    { name: "banner", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  (req, res) => {
    try {
      if (!req.files || !req.files["banner"] || !req.files["video"]) {
        console.error("Arquivos não foram recebidos!");
        return res.status(400).send("Arquivos não foram recebidos!");
      }

      const title = req.body.title;
      const time = req.body.time;
      const category = req.body.category;
      const description = req.body.description;

      const { originalname: originalnamebanner, filename: filenamebanner } =
        req.files["banner"][0];
      const { originalname: originalnamevideo, filename: filenamevideo } =
        req.files["video"][0];

      Video.create({
        title: title,
        slug: slugify(title),
        description: description,
        time: time,
        banner: filenamebanner,
        video: filenamevideo,
        categoryId: category,
      }).then(() => {
        res.redirect("/admin/dashboard");
      });
    } catch (error) {
      console.log(error);
      return res.redirect("/admin/login");
    }
  }
);

module.exports = router;
