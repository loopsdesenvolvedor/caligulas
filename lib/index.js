"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const PORT = process.env.PORT;
const app = (0, express_1.default)();
(0, routes_1.routes)(app);
app.listen(PORT, () => {
    console.log(`App is running  on port: ${PORT}`);
});
//# sourceMappingURL=index.js.map