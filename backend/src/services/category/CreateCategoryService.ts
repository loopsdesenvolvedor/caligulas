import slugify from "slugify";
import { CreateCategoryInput } from "../../@types/Category";
import prisma from "../../lib/prisma";

class CreateCategoryService {
  async execute({ name }: CreateCategoryInput) {
    if (!name) {
      throw new Error("Invalid name error");
    }

    const category = await prisma.category.create({
      data: {
        name: name.toLowerCase(),
        slug: slugify(name),
      },
    });

    return category;
  }
}

export { CreateCategoryService };
