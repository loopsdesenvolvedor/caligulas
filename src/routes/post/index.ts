import { Router } from "express";

import multer from "multer";

import uploadConfig from "../../lib/multer.js";
import { PostControllers } from "../../controllers/post/postControllers.js";

const upload = multer(uploadConfig.upload("uploads/"));

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

export { postRoutes };
