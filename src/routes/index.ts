import express from "express";
import { homeRoute } from "./pages/home.routes";

export const routes = (app: express.Express) => {
  app.use(express.json());
  app.use(homeRoute);
};
