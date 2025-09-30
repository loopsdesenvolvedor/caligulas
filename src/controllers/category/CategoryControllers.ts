import slugify from "slugify";

import { BaseController } from "../baseController.js";
import { CategoryServices } from "../../services/category/CategoryServices.js";

class CategoryControllers extends BaseController {
  async create() {
    try {
      const { name } = this.req.body;

      const categoryService = new CategoryServices();
      const category = await categoryService.create({
        name,
        slug: slugify(name),
      });

      return this.res.status(201).json(category);
    } catch (error: any) {
      this.res.status(400).json({
        message: error.message || "Erro na criação da categoria",
      });
    }
  }
}

export { CategoryControllers };
