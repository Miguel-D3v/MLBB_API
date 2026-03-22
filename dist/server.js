"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = require("./src/database/connect");
const app_1 = __importDefault(require("./src/app"));
const env_1 = require("./src/config/env");
async function startServer() {
    try {
        await connect_1.sequelize.sync();
        console.log("Banco sincronizado");
        app_1.default.listen(env_1.PORT, () => {
            console.log(`Servidor rodando na porta ${env_1.PORT}`);
        });
    }
    catch (error) {
        console.error("Erro ao iniciar:", error);
    }
}
startServer();
//# sourceMappingURL=server.js.map