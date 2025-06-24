import express from "express";
import "express-async-errors";
import cors from "cors";

import { routes } from "./routes";
import { errorMiddleware } from "./middlewares/error";

const app = express();
app.use(cors());

routes(app);

app.use(errorMiddleware);

app.listen(3333, () => console.log(`App is running on port: 3333`));
