import { Router } from "express";
import { UserControllers } from "../../controllers/user/userControllers.js";

const userRoutes = Router();

userRoutes.get("/users", (req, res, next) => {
  new UserControllers(req, res, next).getAll();
});

userRoutes.get("/users/:id", (req, res, next) => {
  new UserControllers(req, res, next).getById();
});

userRoutes.post("/users", (req, res, next) => {
  new UserControllers(req, res, next).create();
});

userRoutes.put("/users/:id", (req, res, next) => {
  new UserControllers(req, res, next).update();
});

userRoutes.delete("/users/:id", (req, res, next) => {
  new UserControllers(req, res, next).delete();
});

export default userRoutes;
