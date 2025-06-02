import express from "express";
import path from "path";
import { routes } from "./routes";

const PORT = process.env.PORT;

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));

routes(app);

app.listen(PORT, () => {
  console.log(`App is running  on port: ${PORT}`);
});
