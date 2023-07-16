import express from "express";
import db from "./src/config/database.js";
import app from "./src/app.js";
import dotenv from "dotenv/config.js";

const PORT = process.env.PORT;

db.sync(() => console.log(`connected database`));

app.listen(PORT, () => console.log("server started"));
