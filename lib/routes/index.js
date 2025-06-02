"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const home_routes_1 = require("./pages/home.routes");
const routes = (app) => {
    app.use(express_1.default.json());
    app.use(home_routes_1.homeRoute);
};
exports.routes = routes;
//# sourceMappingURL=index.js.map