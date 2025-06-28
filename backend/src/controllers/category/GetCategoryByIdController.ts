import { Request, Response } from "express";
import { GetCategoryByIdService } from "../../services/category/GetCategoryByIdService";

class GetCategoryByIdController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const getCategoryByIdService = new GetCategoryByIdService();
    const category = await getCategoryByIdService.execute({ id });

    res.status(200).json(category);
  }
}

export { GetCategoryByIdController };
