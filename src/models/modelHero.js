import { Sequelize } from "sequelize";
import db from "../config/database.js";

  export default db.define( "heroes",{
  hero_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  roles:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  specialties:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  lane:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  release_year:{
    type: Sequelize.INTEGER,
    allowNull: false,
   },
  img_hero:{
    type: Sequelize.STRING,
    allowNull: false,
   },
  }, { timestamps : false });
