import { Sequelize } from "sequelize";
import dotenv from "dotenv/config.js";

 const dbURL= process.env.DATABASE_URL;

 const sequelize = new Sequelize(dbURL,{
 dialectModule: require('pg')
 });

export default sequelize ;
