import prisma from "../../lib/prisma";
import { hash } from "bcrypt";

type Types = {
  name: string;
  username: string;
  email: string;
  password: string;
  avatar?: string;
};

class CreateUserService {
  async execute({ name, username, email, password, avatar }: Types) {
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
