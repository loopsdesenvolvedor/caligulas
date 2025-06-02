"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRoute = void 0;
const express_1 = require("express");
exports.homeRoute = (0, express_1.Router)();
exports.homeRoute.get("/", (req, res) => {
    res.render("index", {
        title: "Caligula's",
    });
});
//# sourceMappingURL=home.routes.js.map