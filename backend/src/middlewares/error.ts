import { NextFunction, Request, Response } from "express";

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof Error) {
    res.status(400).json({
      error: err.message,
    });
    return;
  }

  res.status(500).json({
    status: "Error",
    message: "Internal server error",
  });
  return;
}
