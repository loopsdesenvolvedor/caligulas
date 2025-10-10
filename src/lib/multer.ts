import multer from "multer";
import { resolve, dirname } from "path";
import { randomBytes } from "crypto";
import { fileURLToPath } from "url";
import fs from "fs";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

export default {
  upload() {
    return multer({
      storage: multer.diskStorage({
        destination: (req, file, cb) => {
          let folder = "";

          if (file.fieldname === "image") folder = "uploads/images";
          if (file.fieldname === "video") folder = "uploads/videos";

          const fullPath = resolve(__dirname, "..", "..", folder);

          if (!fs.existsSync(fullPath)) {
            fs.mkdirSync(fullPath, { recursive: true });
          }

          cb(null, fullPath);
        },
        filename: (req, file, cb) => {
          const fileHash = randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`;
          cb(null, fileName);
        },
      }),
    });
  },
};
