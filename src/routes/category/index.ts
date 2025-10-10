import { Router } from "express";
import { CategoryControllers } from "../../controllers/category/CategoryControllers.js";
import multer from "multer";

const categoryRoutes = Router();

categoryRoutes.get("/category", (req, res, next) => {
  new CategoryControllers(req, res, next).getAll();
});

categoryRoutes.get("/category/:id", (req, res, next) => {
  new CategoryControllers(req, res, next).getById();
});

categoryRoutes.post("/category", (req, res, next) => {
  new CategoryControllers(req, res, next).create();
});

categoryRoutes.put("/category/:id", (req, res, next) => {
  new CategoryControllers(req, res, next).update();
});

categoryRoutes.delete("/category/:id", (req, res, next) => {
  new CategoryControllers(req, res, next).delete();
});

export { categoryRoutes };
