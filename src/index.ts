import express from "express";

import dotenv from "dotenv";

import routes from "./routes/index.js";

dotenv.config();
const port = process.env.PORT;

const app = express();

routes(app);

app.listen(port, () => {
  console.info(`App is running on port:${port}`);
});
