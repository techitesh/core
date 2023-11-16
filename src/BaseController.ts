import { NextFunction, Request, Response } from "express";

export abstract class BaseController {
  abstract search(req: Request, res: Response, next: NextFunction): void;
  abstract on_search(req: Request, res: Response, next: NextFunction): void;
}
