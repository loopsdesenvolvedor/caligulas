var express = require('express');
var router = express.Router();
const Video = require("../model/Video");
router.get("/video/:id", async (req, res) => {
  const id = req.params.id;
  await Video.findByPk(id)
    .then((video) => {
      res.render("video", { title: video.title, video, isCategory: false });
    })
    .catch((err) => console.log(err));
});

router.get("/page/category/:slug", async (req, res) => {
  let slug = req.params.slug;
  const now = new Date();
  const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  try {
    const recentVideos = await Video.findAll({
      where: {
        createdAt: {
          [Sequelize.Op.gte]: twentyFourHoursAgo,
        },
      },
    });

    const category = await Category.findOne({
      where: {
        slug: slug,
      },
      include: [{ model: Video }],
    });

    if (category != undefined) {
      res.render("category", {
        isCategory: true,
        videos: category.videos,
        title: category.name,
        recentVideos: recentVideos,
        isHome: false,
        result: false,
      });
    } else {
      res.redirect("/");
    }
  } catch (err) {
    console.error(err);
    res.redirect("/");
  }
});

module.exports = router;
