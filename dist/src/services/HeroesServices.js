"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroesService = void 0;
const HeroesRepo_1 = require("../repositories/HeroesRepo");
class HeroesService {
    constructor() {
        this.heroesRepository = new HeroesRepo_1.HeroesRepository();
    }
    async getAllHeroesPaginated(offset, limit) {
        return this.heroesRepository.findAllPaginated(offset, limit);
    }
    async getHeroById(hero_id) {
        return this.heroesRepository.findById(hero_id);
    }
    async getHeroByName(name) {
        return this.heroesRepository.findByName(name);
    }
    async getHeroesByRole(role) {
        return this.heroesRepository.findByRole(role);
    }
}
exports.HeroesService = HeroesService;
//# sourceMappingURL=HeroesServices.js.map