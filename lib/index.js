"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routes_1 = require("./routes");
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
app.set("view engine", "ejs");
app.set("views", path_1.default.join(process.cwd(), "src/views"));
(0, routes_1.routes)(app);
app.listen(PORT, () => {
    console.log(`App is running  on port: ${PORT}`);
});
//# sourceMappingURL=index.js.map