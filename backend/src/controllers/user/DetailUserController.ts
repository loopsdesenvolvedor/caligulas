import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
  async handle(req: Request, res: Response) {
    const userId = req.user_id;

    const detailUserService = new DetailUserService();
    const user = await detailUserService.execute(userId);

    res.json(user);
  }
}

export { DetailUserController };
