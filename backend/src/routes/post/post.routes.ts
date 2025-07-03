import { Router } from "express";
import { isAuthenticate } from "../../middlewares/isAuthenticate";
import { CreatePostController } from "../../controllers/post/CreatePostController";
import multer from "multer";
import uploadConfig from "../../lib/multer";

const upload = multer(uploadConfig.upload("./uploads"));

const postRoutes = Router();

postRoutes.post(
  "/post",
  isAuthenticate,
  upload.fields([
    {
      name: "thumbnail",
      maxCount: 1,
    },
    {
      name: "video",
      maxCount: 1,
    },
  ]),
  new CreatePostController().handle
);

export { postRoutes };
