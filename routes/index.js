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

});

module.exports = router;
