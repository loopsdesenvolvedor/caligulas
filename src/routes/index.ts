import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import "express-async-errors";

import userRoutes from "./user/userRoutes.js";
import { categoryRoutes } from "./category/index.js";

export default (app: express.Express) => {
  app.use(express.json());
  app.use(userRoutes);
  app.use(categoryRoutes);

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) res.status(400).json({ message: err.message });

    res.status(500).json({
      status: "Error",
      message: "Internal server error",
    });
  });
};
