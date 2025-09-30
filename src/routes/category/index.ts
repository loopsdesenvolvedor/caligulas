import { Router } from "express";
import { CategoryControllers } from "../../controllers/category/CategoryControllers.js";

const categoryRoutes = Router();

categoryRoutes.get("/category", (req, res, next) => {
  new CategoryControllers(req, res, next).getAll();
});

categoryRoutes.post("/category", (req, res, next) => {
  new CategoryControllers(req, res, next).create();
});

export { categoryRoutes };
