import { Request, Response, Router } from "express";
export const homeRoute = Router();

homeRoute.get("/", (req: Request, res: Response) => {
  res.render("index", {
    title: "Caligula's",
  });
});
