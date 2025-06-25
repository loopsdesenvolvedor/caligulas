import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserServices";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, username, email, password } = req.body;
    const avatar: string | undefined = req.file?.filename;

    const createUserService = new CreateUserService();
    const user = await createUserService.execute({
      name,
      username,
      email,
      password,
      avatar,
    });

    return res.json(user);
  }
}

export { CreateUserController };
