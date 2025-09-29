import { BaseController } from "../baseController.js";
import { UserService } from "../../services/user/userServices.js";

class UserController extends BaseController {
  async create() {
    try {
      const { name, email, password } = this.req.body;
      const userCreateService = new UserService();
      const user = await userCreateService.create({ name, email, password });

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
      const userUpdateService = new UserService();
      const user = await userUpdateService.update({
        id,
        name,
        email,
        password,
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

export { UserController };
