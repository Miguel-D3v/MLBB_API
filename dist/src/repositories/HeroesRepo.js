"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroesRepository = void 0;
const ModelHero_1 = require("../models/ModelHero");
class HeroesRepository {
    async findAllPaginated(offset, limit) {
        const heroes = await ModelHero_1.Hero.findAll({
            offset,
            limit
        });
        return heroes.map(h => h.toJSON());
    }
    async findById(hero_id) {
        const hero = await ModelHero_1.Hero.findByPk(hero_id);
        return hero ? hero.toJSON() : null;
    }
    async findByName(name) {
        const hero = await ModelHero_1.Hero.findOne({ where: { name } });
        return hero ? hero.toJSON() : null;
    }
    async findByRole(role) {
        const heroes = await ModelHero_1.Hero.findAll({ where: { role } });
        return heroes.map(h => h.toJSON());
    }
}
exports.HeroesRepository = HeroesRepository;
//# sourceMappingURL=HeroesRepo.js.map