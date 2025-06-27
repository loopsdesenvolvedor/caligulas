import { Router } from "express";
import { CreateUserController } from "../../controllers/user/CreateUserController";
import { AuthUserController } from "../../controllers/user/AuthUserController";
import { DetailUserController } from "../../controllers/user/DetailUserController";
import { isAuthenticate } from "../../middlewares/isAuthenticate";

const userRoutes = Router();

userRoutes.post("/users", new CreateUserController().handle);
userRoutes.post("/session", new AuthUserController().handle);
userRoutes.get("/me", isAuthenticate, new DetailUserController().handle);

export { userRoutes };
