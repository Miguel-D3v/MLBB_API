import { Sequelize } from "sequelize";
import dotenv from "dotenv/config.js";
import pg from "pg";

 const dbURL= process.env.DATABASE_URL;

 const sequelize = new Sequelize(dbURL,{
 dialectModule: pg
 });

export default sequelize ;
