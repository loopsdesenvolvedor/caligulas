import type { Request, Response, NextFunction } from "express";

export abstract class BaseController {
  protected req: Request;
  protected res: Response;
  protected next?: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }
}
