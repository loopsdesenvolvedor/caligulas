import slugify from "slugify";
import { CategoryInput } from "../../@types/Category";
import prisma from "../../lib/prisma";

class CreateCategoryService {
  async execute({ name }: CategoryInput) {
    if (!name) {
      throw new Error("Invalid name error");
    }

    const category = await prisma.category.create({
      data: {
        name: name,
        slug: slugify(name, { lower: true, strict: true, locale: "pt" }),
      },
    });

    return category;
  }
}

export { CreateCategoryService };
