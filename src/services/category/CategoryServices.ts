import type {
  CreateCategoryProps,
  UpdateCategoryProps,
} from "../../@types/Category.js";
import prisma from "../../lib/prisma.js";

class CategoryServices {
  async getAll() {
    const cateories = await prisma.category.findMany({
      include: { posts: true },
    });

    if (cateories.length === 0) {
      throw new Error("Nenhuma categoria encontrada");
    }

    return cateories;
  }

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

  async update({ id, name, slug }: UpdateCategoryProps) {
    if (!id || !name || !slug) {
      throw new Error("Todos os campos são obrigatórios");
    }

    const category = await prisma.category.update({
      where: { id: id as string },
      data: { name: name, slug: slug },
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
