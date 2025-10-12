import { BaseController } from "../baseController.js";
import { UserServices } from "../../services/user/userServices.js";

class UserControllers extends BaseController {
  async getAll() {
    try {
      const getAllUsers = new UserServices();
      const users = await getAllUsers.getAll();

      return this.res.status(200).json(users);
    } catch (error: any) {
      this.res.status(400).json({
        message: error.message || "Usuários não encontrado",
      });
    }
  }

  async getById() {
    try {
      const id = this.req.params.id as string;
      const getUserById = new UserServices();
      const user = await getUserById.getById({ id });

      return this.res.status(200).json(user);
    } catch (error: any) {
      this.res.status(400).json({
        message: error.message || "Erro ao encontrar o usuário",
      });
    }
  }

  async create() {
    try {
      const { name, email, password } = this.req.body;

      let avatar: string | null = null;

      if (this.req.files && !Array.isArray(this.req.files)) {
        avatar = this.req.files.avatar?.[0]?.filename || null;
      }

      if (!avatar) {
        return this.res.status(400).json({ error: "Avatar is required" });
      }

      const userCreateService = new UserServices();
      const user = await userCreateService.create({
        name,
        email,
        password,
        avatar,
      });

      return this.res.status(201).json(user);
    } catch (error: any) {
      this.res.status(400).json({
        message: error.message || "Erro ao criar usuário",
      });
    }
  }

  async update() {
    try {
      const id = this.req.params.id?.toString() as string;
      const { name, email, password } = this.req.body;

      let avatar: string | null = null;

      if (this.req.files && !Array.isArray(this.req.files)) {
        avatar = this.req.files.avatar?.[0]?.filename || null;
      }

      if (!avatar) {
        return this.res.status(400).json({ error: "Avatar is required" });
      }

      const userUpdateService = new UserServices();
      const user = await userUpdateService.update({
        id,
        name,
        email,
        password,
        avatar,
      });

      return this.res.status(200).json(user);
    } catch (error: any) {
      this.res.status(400).json({
        message: error.message || "Erro ao atualizar usuário",
      });
    }
  }

  async delete() {
    try {
      const id = this.req.params.id as string;
      const deleteUserService = new UserServices();
      const user = await deleteUserService.delete({ id });

      return this.res.status(200).json({
        message: "Usuário deletado com sucesso.",
      });
    } catch (error: any) {
      this.res.status(400).json({
        message: error.message || "Erro ao deletar usuário",
      });
    }
  }
}

export { UserControllers };
