import { Router } from "express";
import { UserController } from "../../controllers/user/userControllers.js";

const userRoutes = Router();

userRoutes.post("/users", (req, res, next) => {
  new UserController(req, res, next).create();
});

userRoutes.put("/users/:id", (req, res, next) => {
userRoutes.delete("/users/:id", (req, res, next) => {
  new UserControllers(req, res, next).delete();
});

export default userRoutes;
