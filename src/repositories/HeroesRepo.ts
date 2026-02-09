import { Hero } from "../models/ModelHero";
import { HeroAttributes } from "../interfaces/IHero";

export class HeroesRepository {

    async findAllPaginated(offset: number,limit: number): Promise<HeroAttributes[]> {
        return await Hero.findAll(
            {offset: offset, 
             limit: limit}
        );
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
