import { Router } from "express";

import uploadConfig from "../../lib/multer.js";
import { PostControllers } from "../../controllers/post/postControllers.js";

const upload = uploadConfig.upload();

const postRoutes = Router();

postRoutes.get("/posts", (req, res, next) => {
  new PostControllers(req, res, next).getAll();
});

postRoutes.get("/post/:id", (req, res, next) => {
  new PostControllers(req, res, next).getById();
});

postRoutes.post(
  "/post",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  (req, res, next) => {
    new PostControllers(req, res, next).create();
  }
);

postRoutes.put(
  "/post/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  (req, res, next) => {
    new PostControllers(req, res, next).update();
  }
);

postRoutes.delete("/post/:id", (req, res, next) => {
  new PostControllers(req, res, next).delete();
});

export { postRoutes };
