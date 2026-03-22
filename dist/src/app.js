"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routes/route"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(route_1.default);
app.use((error, req, res, next) => {
    const statusCode = error.httpStatusCode || 500;
    const message = error.message || "Internal Server Error";
    res.status(statusCode).json({
        message: message,
        error: process.env.NODE_ENV === "development" ? error : {}
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map