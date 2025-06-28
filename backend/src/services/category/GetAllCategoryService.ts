import prisma from "../../lib/prisma";

class GetAllCategoryService {
  async execute() {
    const categories = await prisma.category.findMany();

    return categories;
  }
}

export { GetAllCategoryService };
