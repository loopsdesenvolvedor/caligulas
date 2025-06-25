import prisma from "../../lib/prisma";
import { hash } from "bcrypt";

import { CreateUserInput } from "../../@types/User";

class CreateUserService {
  async execute({ name, username, email, password, avatar }: CreateUserInput) {
    const userAlreadyExists = await prisma.user.findFirst({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: passwordHash,
        avatar,
      },

      select: {
        id: true,
        name: true,
        username: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
