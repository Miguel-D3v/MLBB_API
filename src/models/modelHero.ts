import  { Model, DataTypes } from "sequelize"
import {sequelize} from "../database/connect";
import {HeroAttributes} from '../interfaces/IHero';

export class Hero
  extends Model<HeroAttributes>
  implements HeroAttributes {

  public hero_id!: number;
  public name!: string;
  public roles!: string;
  public specialties!: string;
  public lane!: string;
  public release_year!: number;
  public img_hero!: string;
}

  Hero.init(
  {
    hero_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    roles: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    specialties: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lane: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    release_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    img_hero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'heroes',
    timestamps: false,
  }
);