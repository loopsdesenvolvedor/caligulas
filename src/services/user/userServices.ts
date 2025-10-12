import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import prisma from "../../lib/prisma.js";
import { hash } from "bcryptjs";

import type {
  CreateUserProps,
  UpdateUserProps,
  DeleteUserProps,
  GetUserByIdProps,
} from "../../@types/User.js";
import { title } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class UserServices {
  async getAll() {
    const users = await prisma.user.findMany();

    if (!users) {
      throw new Error("Nenhum usuário encontrado.");
    }

    return users;
  }

  async getById({ id }: GetUserByIdProps) {
    if (!id) {
      throw new Error("ID é obrigatório.");
    }

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }

  async create({ name, email, password, avatar }: CreateUserProps) {
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
        avatar: avatar || null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
      },
    });

    return {
      data: user,
    };
  }

  async update({ id, name, email, password, avatar }: UpdateUserProps) {
    if (!id) {
      throw new Error("ID é obrigatório.");
    }

    const existingUser = await prisma.user.findUnique({
      where: { id: id as string },
    });

    if (!existingUser) {
      throw new Error("Usuário não encontrado.");
    }

    const uploadsPath = path.resolve(__dirname, "..", "..", "..", "uploads");

    if (avatar && existingUser.avatar && existingUser.avatar !== avatar) {
      const oldImagePath = path.join(
        uploadsPath,
        "avatars",
        existingUser.avatar
      );

      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
        // console.log("Imagem antiga excluída:", oldImagePath);
      } else {
        // console.log("Imagem antiga não encontrada:", oldImagePath);
      }
    }

    const passwordHash = await hash(password as string, 8);

    const dataToUpdate: any = {};

    if (name) dataToUpdate.name = name;
    if (email) dataToUpdate.email = email;
    if (password) dataToUpdate.password = passwordHash;
    if (avatar) dataToUpdate.avatar = avatar;

    const user = await prisma.user.update({
      where: { id: id as string },
      data: dataToUpdate,
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
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

export { UserServices };
