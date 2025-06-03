import express from "express";
import path from "path";
import { homeRoute } from "./pages/home.routes";

export const routes = (app: express.Express) => {
  app.use(express.static(path.join(__dirname, "..", "..", "public")));
  app.set("view engine", "ejs");
  app.set("views", path.join(process.cwd(), "src/views"));
  app.use(express.json());
  app.use(homeRoute);
};
