import type { CreateCategoryProps } from "../../@types/Category.js";
import prisma from "../../lib/prisma.js";

class CategoryServices {
  async create({ name, slug }: CreateCategoryProps) {
    if (!name || !slug) {
      throw new Error("Nome e slug são campos obrigatório.");
    }

    const category = await prisma.category.create({
      data: {
        name,
        slug,
      },
      select: {
        id: true,
        name: true,
        slug: true,
      },
    });

    return category;
  }
}

export { CategoryServices };
