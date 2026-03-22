"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.dbURL = void 0;
require("dotenv/config");
const databaseURL = process.env.DATABASE_URL;
if (!databaseURL) {
    throw new Error('DATABASE_URL undefined in .env');
}
exports.dbURL = databaseURL;
exports.PORT = Number(process.env.PORT) || 3333;
//# sourceMappingURL=env.js.map