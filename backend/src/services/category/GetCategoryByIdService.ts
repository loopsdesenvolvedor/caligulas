import { GetCategoryPayload } from "../../@types/Category";
import prisma from "../../lib/prisma";

class GetCategoryByIdService {
  async execute({ id }: GetCategoryPayload) {
    const category = await prisma.category.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        slug: true,
      },
    });

    if (!category) {
      throw new Error("Category not found");
    }

    return category;
  }
}

export { GetCategoryByIdService };
