import { Router } from "express";
import { UserControllers } from "../../controllers/user/userControllers.js";
import uploadConfig from "../../lib/multer.js";

const userRoutes = Router();

const upload = uploadConfig.upload();

userRoutes.get("/users", (req, res, next) => {
  new UserControllers(req, res, next).getAll();
});

userRoutes.get("/user/:id", (req, res, next) => {
  new UserControllers(req, res, next).getById();
});

userRoutes.post(
  "/user",
  upload.fields([{ name: "avatar", maxCount: 1 }]),
  (req, res, next) => {
    new UserControllers(req, res, next).create();
  }
);

userRoutes.put(
  "/user/:id",
  upload.fields([{ name: "avatar", maxCount: 1 }]),
  (req, res, next) => {
    new UserControllers(req, res, next).update();
  }
);

userRoutes.delete("/user/:id", (req, res, next) => {
  new UserControllers(req, res, next).delete();
});

export default userRoutes;
