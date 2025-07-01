import { Request, Response } from "express";
import { EditCategoryService } from "../../services/category/EditCategoryService";

class EditCategoryController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const { name } = req.body;

    const editCatgeoryService = new EditCategoryService();
    const category = await editCatgeoryService.execute({ id, name });

    res.status(200).json(category);
  }
}

export { EditCategoryController };
