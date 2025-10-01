import slugify from "slugify";

import { BaseController } from "../baseController.js";
import { CategoryServices } from "../../services/category/CategoryServices.js";

class CategoryControllers extends BaseController {
  async getAll() {
    try {
      const categoryServices = new CategoryServices();
      const categoires = await categoryServices.getAll();

      return this.res.status(200).json(categoires);
    } catch (error: any) {
      this.res.status(400).json({
        message: error.message || "Erro ao buscar as categorias",
      });
    }
  }

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

  async update() {
    try {
      const id = this.req.params.id;
      const { name } = this.req.body;

      const slug = slugify(name) as string;
      const categoryService = new CategoryServices();
      const catgeory = await categoryService.update({
        id: id as string,
        name,
        slug,
      });

      return this.res.status(200).json(catgeory);
    } catch (error: any) {
      this.res.status(400).json({
        message: error.message || "Erro ao atualizar a categoria",
      });
    }
  }
}

export { CategoryControllers };
