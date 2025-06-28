import { Router } from "express";
import { CreateCategoryController } from "../../controllers/category/CreateCategoryController";
import { isAuthenticate } from "../../middlewares/isAuthenticate";

const categoryRoutes = Router();

categoryRoutes.post(
  "/category",
  isAuthenticate,
  new CreateCategoryController().handle
);

export { categoryRoutes };
