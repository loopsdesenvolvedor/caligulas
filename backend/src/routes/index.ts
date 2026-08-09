import express from "express";
import type { Request, Response, NextFunction, Express } from "express";
import { userRoutes } from "./user/userRoutes.js";

export const routes = (app: express.Express) => {
  app.use(express.json());
  app.use(userRoutes);

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {});
};
