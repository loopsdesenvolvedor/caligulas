import { Router } from "express";
import { CreateCategoryController } from "../../controllers/category/CreateCategoryController";
import { isAuthenticate } from "../../middlewares/isAuthenticate";
import { GetAllCategoryController } from "../../controllers/category/GetAllCategoryController";
import { GetCategoryByIdController } from "../../controllers/category/GetCategoryByIdController";

const categoryRoutes = Router();

categoryRoutes.post(
  "/category",
  isAuthenticate,
  new CreateCategoryController().handle
);

categoryRoutes.get("/categories", new GetAllCategoryController().handle);
categoryRoutes.get("/category/:id", new GetCategoryByIdController().handle);

export { categoryRoutes };
