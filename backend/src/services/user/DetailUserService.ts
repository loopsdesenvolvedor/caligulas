import prisma from "../../lib/prisma";

class DetailUserService {
  async execute(userId: string) {
    const user = await prisma.user.findFirst({
      where: { id: userId },
      select: {
        name: true,
        username: true,
        email: true,
        avatar: true,
      },
    });

    return user;
  }
}

export { DetailUserService };
