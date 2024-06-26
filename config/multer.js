const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "..", "uploads"));
  },
  filename: (req, file, cb) => {
    const fileHash = crypto.randomBytes(16).toString("hex");
    const fileName = `${fileHash}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

module.exports = upload;
