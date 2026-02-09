import { Hero } from "../models/modelHero";
import { HeroAttributes } from "../interfaces/IHero";

export class HeroesRepository {

    async findAll(): Promise<HeroAttributes[]> {
        return await Hero.findAll();
    }
   
    async findById(hero_id: number): Promise<HeroAttributes | null> {
        return await Hero.findByPk(hero_id);
    }

    
    async findByName(name: string): Promise<HeroAttributes | null> {
        return await Hero.findOne({ where: { name } });
    }

    async findByRole(role: string): Promise<HeroAttributes[]> {
        return await Hero.findAll({ where: { roles: role } });
    }
}
