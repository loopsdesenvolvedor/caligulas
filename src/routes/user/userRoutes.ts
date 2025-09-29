import { Router } from "express";
import { UserController } from "../../controllers/user/userControllers.js";

const userRoutes = Router();

userRoutes.post("/users", (req, res, next) => {
  new UserController(req, res, next).create();
});

userRoutes.put("/users/:id", (req, res, next) => {
  new UserController(req, res, next).update();
});

export default userRoutes;
