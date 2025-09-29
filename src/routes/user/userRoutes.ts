import { Router } from "express";
import { UserController } from "../../controllers/user/userController.js";

const userRoutes = Router();

userRoutes.post("/users", (req, res, next) => {
  new UserController(req, res, next).create();
});

export default userRoutes;
