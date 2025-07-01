import { Router } from "express";
import { CreateCategoryController } from "../../controllers/category/CreateCategoryController";
import { isAuthenticate } from "../../middlewares/isAuthenticate";
import { GetAllCategoryController } from "../../controllers/category/GetAllCategoryController";
import { GetCategoryByIdController } from "../../controllers/category/GetCategoryByIdController";
import { EditCategoryController } from "../../controllers/category/EditCategoryController";
import { DeleteCategoryController } from "../../controllers/category/DeleteCategoryController";

const categoryRoutes = Router();

categoryRoutes.post(
  "/category",
  isAuthenticate,
  new CreateCategoryController().handle
);

categoryRoutes.get("/categories", new GetAllCategoryController().handle);
categoryRoutes.get("/category/:id", new GetCategoryByIdController().handle);
categoryRoutes.put("/category/:id", new EditCategoryController().handle);
categoryRoutes.delete("/category/:id", new DeleteCategoryController().handle);

export { categoryRoutes };
