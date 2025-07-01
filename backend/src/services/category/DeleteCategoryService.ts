import { CategoryInput } from "../../@types/Category";
import prisma from "../../lib/prisma";

class DeleteCategoryService {
  async execute({ id }: CategoryInput) {
    if (!id) {
      throw new Error("ID is required to delete category");
    }

    const category = await prisma.category.delete({
      where: { id },
    });

    return category;
  }
}

export { DeleteCategoryService };
