import prisma from "../../lib/prisma.js";
import { hash } from "bcryptjs";

  DeleteUserProps,

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

  async update({ id, name, email, password }: UpdateUserProps) {
    if (!id) {
      throw new Error("ID é obrigatório.");
    }

    const passwordHash = await hash(password as string, 8);

    const user = await prisma.user.update({
      where: { id: id as string },
      data: {
        name: name as string,
        email: email as string,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
  async delete({ id }: DeleteUserProps) {
    if (!id) {
      throw new Error("ID é obrigatório.");
    }

    const user = await prisma.user.delete({
      where: {
        id,
      },
    });

    return user;
  }
}

export { UserService };
