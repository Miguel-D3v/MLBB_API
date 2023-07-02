import express from "express";
import db from "./src/config/database.js";
import app from "./src/app.js";

db.sync(() => console.log(`Banco de dados conectado`));

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
