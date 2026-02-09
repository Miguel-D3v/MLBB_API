import {sequelize} from "./src/database/connect.ts";
import app from "./src/app.ts";
import { PORT } from './src/config/env'

async function startServer() {
  try {
    await sequelize.sync();

    console.log("Banco sincronizado");

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });

  } catch (error) {
    console.error("Erro ao iniciar:", error);
  }
}

startServer()
