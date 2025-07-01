import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";

class DeleteCategoryController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const deteleCategoryService = new DeleteCategoryService();
    const category = await deteleCategoryService.execute({ id });

    res.status(204).json(category);
  }
}

export { DeleteCategoryController };
