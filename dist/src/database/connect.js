"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const env_1 = require("../config/env");
const pg_1 = __importDefault(require("pg"));
exports.sequelize = new sequelize_1.Sequelize(env_1.dbURL, { dialectModule: pg_1.default });
//# sourceMappingURL=connect.js.map