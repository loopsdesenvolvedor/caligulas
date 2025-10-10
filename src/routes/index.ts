import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import "express-async-errors";

import userRoutes from "./user/userRoutes.js";
import { categoryRoutes } from "./category/index.js";
import { postRoutes } from "./post/index.js";

export default (app: express.Express) => {
  app.use(express.json());
  app.use("/files", express.static("uploads"));
  app.use(userRoutes);
  app.use(categoryRoutes);
  app.use(postRoutes);

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error)
      return res.status(400).json({ message: err.message });

    return res.status(500).json({
      status: "Error",
      message: "Internal server error",
    });
  });
};
