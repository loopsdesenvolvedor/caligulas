import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import "express-async-errors";

import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import userRoutes from "./user/userRoutes.js";
import { categoryRoutes } from "./category/index.js";
import { postRoutes } from "./post/index.js";

export default (app: express.Express) => {
  app.use(express.json());
  app.use("/files", express.static(resolve(__dirname, "..", "..", "uploads")));
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
