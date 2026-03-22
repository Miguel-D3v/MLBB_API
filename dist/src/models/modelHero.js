"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
const sequelize_1 = require("sequelize");
const connect_1 = require("../database/connect");
class Hero extends sequelize_1.Model {
}
exports.Hero = Hero;
Hero.init({
    hero_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    specialties: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lane: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    release_year: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    img_hero: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: connect_1.sequelize,
    tableName: 'heroes',
    timestamps: false,
});
//# sourceMappingURL=modelHero.js.map