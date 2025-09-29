import prisma from "../../lib/prisma.js";
import { hash } from "bcryptjs";

import type { CreateUserProps } from "../../@types/User.js";

class UserService {
  async create({ name, email, password }: CreateUserProps) {
    if (!name || !email || !password)
      throw new Error("Todos os campos são obrigatórios.");

    const userAlreadyExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new Error("Esse e-mail já está em uso. Por favor use outro.");
    }

    const passwordHash = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return {
      data: user,
    };
  }
}

export { UserService };
