//import { Sequelize } from "sequelize";
import 'dotenv/config';
//import pg from "pg";

// const dbURL= process.env.DATABASE_URL;

// const sequelize = new Sequelize(dbURL,{
// dialectModule: pg
// });

//export default sequelize ;


const databaseURL = process.env.DATABASE_URL;

if (!databaseURL) {
  throw new Error('DATABASE_URL undefined in .env');
}

export const dbURL: string = databaseURL;

export const PORT: number = Number(process.env.PORT) || 3333;

