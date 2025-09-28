import express from "express";
import userRoutes from "./user/userRoutes.js";

export default (app: express.Express) => {
  app.use(express.json());
  app.use(userRoutes);
};
