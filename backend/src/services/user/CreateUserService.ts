import type { CreateUserProps } from "../../@types/User.js";
import { prisma } from "../../lib/prisma.js";
import { hash } from "bcryptjs";

class CreateUserService {
  async execute({ name, email, password, avatar }: CreateUserProps) {
    const userAlreadyExists = await prisma.user.findUnique({
      where: { email: email },
    });

    if (userAlreadyExists) {
      throw new Error("Email/password conflict");
    }

    const passwordHash = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash,
        avatar: avatar ?? null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
