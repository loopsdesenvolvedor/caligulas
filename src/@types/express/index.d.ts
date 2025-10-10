import * as Multer from "multer";

declare global {
  namespace Express {
    interface Request {
      files?: {
        image?: Multer.File[];
        video?: Multer.File[];
      };
    }
  }
}
