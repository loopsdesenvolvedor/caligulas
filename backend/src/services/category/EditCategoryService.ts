import slugify from "slugify";
import { CategoryInput } from "../../@types/Category";
import prisma from "../../lib/prisma";

class EditCategoryService {
  async execute({ id, name }: CategoryInput) {
    if (!name?.trim()) {
      throw new Error("Category invalid");
    }

    const category = await prisma.category.update({
      where: { id: id },
      data: {
        name: name,
        slug: slugify(name, { lower: true, strict: true, locale: "pt" }),
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

export { EditCategoryService };
