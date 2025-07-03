import express from "express";
import { userRoutes } from "./user/user.routes";
import { categoryRoutes } from "./category/category.routes";
import { postRoutes } from "./post/post.routes";

export const routes = (app: express.Express) => {
  app.use(express.json());
  app.use(userRoutes);
  app.use(categoryRoutes);
  app.use(postRoutes);
};
