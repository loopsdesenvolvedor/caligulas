import express from "express";
import { routes } from "./routes";

const PORT = process.env.PORT;

const app = express();

routes(app);

app.listen(PORT, () => {
  console.log(`App is running  on port: ${PORT}`);
});
