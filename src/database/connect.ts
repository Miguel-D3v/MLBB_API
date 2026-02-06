import { Sequelize } from "sequelize";
import {dbURL} from "../config/env";
import pg from "pg";

export const sequelize = new Sequelize(dbURL,{ dialectModule: pg});

