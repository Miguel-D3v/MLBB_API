import { Hero } from "../models/ModelHero";
import { HeroAttributes } from "../interfaces/IHero";

export class HeroesRepository {

    async findAllPaginated(offset: number,limit: number): Promise<HeroAttributes[]> {
        const heroes = await Hero.findAll({
            offset ,
            limit 
        });
        return heroes.map(h => h.toJSON() as HeroAttributes);
        
    }
   
    async findById(hero_id: number): Promise<HeroAttributes | null> {
        const hero = await Hero.findByPk(hero_id);
        return hero ? (hero.toJSON() as HeroAttributes) : null;
    }

    
    async findByName(name: string): Promise<HeroAttributes | null> {
        const hero = await Hero.findOne({ where: { name } });
        return hero ? (hero.toJSON() as HeroAttributes) : null;
    }

    async findByRole(role: string): Promise<HeroAttributes[]> {
        const heroes = await Hero.findAll({ where: { role } });
        return heroes.map(h => h.toJSON() as HeroAttributes);
    }
}
