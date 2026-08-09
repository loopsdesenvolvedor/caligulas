import { Router } from "express";
import multer from "multer";
import multerConfig from "../../lib/multer.js";

const upload = multer(multerConfig.upload("temp"));

export const userRoutes = Router();

userRoutes.post("/users", upload.single("avatar"));
