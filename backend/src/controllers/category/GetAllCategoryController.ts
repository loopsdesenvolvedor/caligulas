import { Request, Response } from "express";
import { GetAllCategoryService } from "../../services/category/GetAllCategoryService";

class GetAllCategoryController {
  async handle(req: Request, res: Response) {
    const getAllCategoryService = new GetAllCategoryService();
    const categories = await getAllCategoryService.execute();

    res.status(200).json(categories);
  }
}

export { GetAllCategoryController };
