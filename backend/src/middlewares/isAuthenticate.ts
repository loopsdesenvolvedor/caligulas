import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { TokenPayload } from "../@types/User";

export function isAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    res.status(401).end();
    return;
  }
  const [, token] = authToken.split(" ");
  try {
    const { sub } = verify(
      token,
      process.env.JWT_SECRET as string
    ) as TokenPayload;

    req.user_id = sub;

    return next();
  } catch (error) {}
}
