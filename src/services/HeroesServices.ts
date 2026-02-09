import { HeroesRepository } from "../repositories/HeroesRepo";
import { HeroAttributes } from "../interfaces/IHero";



export class HeroesService {
    private heroesRepository: HeroesRepository;

    constructor() {
        this.heroesRepository = new HeroesRepository();
    }


    async getAllHeroesPaginated(offset: number, limit: number): Promise<HeroAttributes[]> {
        return await this.heroesRepository.findAllPaginated(offset, limit);
    }

    async getHeroById(hero_id: number): Promise<HeroAttributes | null> {
        return await this.heroesRepository.findById(hero_id);
    }

    async getHeroByName(name: string): Promise<HeroAttributes | null> {
        return await this.heroesRepository.findByName(name);
    } 
    
    async getHeroesByRole(role: string): Promise<HeroAttributes[]> {
        return await this.heroesRepository.findByRole(role);
    }

}
