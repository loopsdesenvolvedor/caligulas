import multer from "multer";
import { resolve, dirname } from "path";
import { randomBytes } from "crypto";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (request, file, callback) => {
          const fileHash = randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`;
          callback(null, fileName);
        },
      }),
    };
  },
};
