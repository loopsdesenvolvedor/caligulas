import type { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService.js";

class CraeteUserController {
  async handle(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const avatar = req.file?.filename;

      const createUserService = new CreateUserService();

      const user = await createUserService.execute({
        name,
        email,
        password,
        avatar,
      });

      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({
        error: error instanceof Error ? error.message : "Internal server error",
      });
    }
  }
}

export { CraeteUserController };
