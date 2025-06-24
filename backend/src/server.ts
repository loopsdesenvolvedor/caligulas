import express from "express";
import "express-async-errors";
import { routes } from "./routes";
import { errorMiddleware } from "./middlewares/error";

const app = express();

routes(app);

app.use(errorMiddleware);

app.listen(3333, () => console.log(`App is running on port: 3333`));
