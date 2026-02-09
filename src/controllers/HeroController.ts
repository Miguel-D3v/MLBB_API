import { Request , Response , NextFunction } from 'express';
import { HeroesService } from '../services/HeroesServices';

export class HeroController {
    private heroesService: HeroesService; 

    constructor() {
        this.heroesService = new HeroesService();
    }
    
    async getAllHeroesPaginated(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const offsetParam = req.query.offset;
        const limitParam = req.query.limit;

        const offset = typeof offsetParam === 'string' && !isNaN(parseInt(offsetParam, 10)) 
            ? parseInt(offsetParam, 10) 
            : 0;
        
        const limit = typeof limitParam === 'string' && !isNaN(parseInt(limitParam, 10)) 
            ? parseInt(limitParam, 10) 
            : 10;

        if (offset < 0 || limit < 0 || limit > 100) {
            res.status(400).json({ 
                message: "Invalid pagination parameters. Offset and limit must be positive, limit max 100" 
            });
            return;
        }

        const heroes = await this.heroesService.getAllHeroesPaginated(offset, limit);
        res.json({
            message: "Successfully retrieved heroes",
            heroes: heroes
        });
    } catch (err) {
        const error = new Error(String(err));
        (error as any).httpStatusCode = 400;
        next(error);
    }
}

   async getHeroById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const idParam = req.params.id;
        
        if (!idParam || isNaN(parseInt(idParam, 10))) {
            res.status(400).json({ message: "Invalid hero ID. Must be a valid number" });
            return;
        }

        const hero_id = parseInt(idParam, 10);

        if (hero_id < 0) {
            res.status(400).json({ message: "Hero ID must be a positive number" });
            return;
        }

        const hero = await this.heroesService.getHeroById(hero_id);
        
        if (hero) {
            res.json({
                message: "Successfully retrieved hero",
                hero: hero
            });
        } else {
            res.status(404).json({ message: "Hero not found" });
        }
    } catch (err) {
        const error = new Error(String(err));
        (error as any).httpStatusCode = 400;
        next(error);
    }
}

    async getHeroByName(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const name = req.params.name;
        
        if (!name || typeof name !== 'string' || name.trim() === '') {
            res.status(400).json({ message: "Invalid hero name. Name must be a non-empty string" });
            return;
        }

        const hero = await this.heroesService.getHeroByName(name);
        if (hero) {
            res.json({
                message: "Successfully retrieved hero",
                hero: hero
            });
        } else {
            res.status(404).json({ message: "Hero not found" });
        }           
    } catch (err) {
        const error = new Error(String(err));
        (error as any).httpStatusCode = 400;
        next(error);
    }
}

    async getHeroesByRole(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const role = req.params.role;
        
        if (!role || typeof role !== 'string' || role.trim() === '') {
            res.status(400).json({ message: "Invalid role parameter. Role must be a non-empty string" });
            return;
        }

        const heroes = await this.heroesService.getHeroesByRole(role);
        
        if (heroes && heroes.length > 0) {
            res.json({
                message: "Successfully retrieved heroes",
                heroes: heroes
            });
        } else {
            res.status(404).json({ message: "No heroes found for this role" });
        }
    } catch (err) {
        const error = new Error(String(err));
        (error as any).httpStatusCode = 400;
        next(error);
    }

    }
}