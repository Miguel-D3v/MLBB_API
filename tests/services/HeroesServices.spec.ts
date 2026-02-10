import { HeroesService } from '../../src/services/HeroesServices';
import { HeroesRepository } from '../../src/repositories/HeroesRepo';
import { Hero } from '../../src/models/ModelHero';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(() => {
    service = new HeroesService();
    jest.restoreAllMocks();
  });

  describe('getAllHeroesPaginated', () => {
    it('deve retornar heróis com paginação', async () => {

      const mockHeroes = [
        { id: 1, name: 'Atlas', role: 'Tank' },
        { id: 2, name: 'Arlott', role: 'Fighter' },
        { id: 3, name: 'Tigreal', role: 'Tank' },
        { id: 4, name: 'Valir', role: 'Mage' },
        { id: 5, name: 'Alice', role: 'Support' },
        { id: 6, name: 'Estes', role: 'Support' },
        { id: 7, name: 'Hayabusa', role: 'Assassin' },
        { id: 8, name: 'Fanny', role: 'Assassin' },
        { id: 9, name: 'Gusion', role: 'Assassin' },
        { id: 10, name: 'Kimmy', role: 'Marksman' },
      ];

      jest
        .spyOn(HeroesRepository.prototype, 'findAllPaginated')
        .mockResolvedValue(mockHeroes as any);

      const result = await service.getAllHeroesPaginated(0, 10);

      expect(result).toEqual(mockHeroes);
      expect(result).toHaveLength(10);
    });
  });

  describe('getHeroByName', () => {
    it('deve retornar um herói pelo nome', async () => {

      const mockHero = { id: 1, name: 'Atlas', role: 'Tank' };

      jest
        .spyOn(HeroesRepository.prototype, 'findByName')
        .mockResolvedValue(mockHero as any);

      const result = await service.getHeroByName('Atlas');

      expect(result).toEqual(mockHero);
    });
  });

  describe('getHeroesByRole', () => {
    it('deve retornar heróis por função', async () => {

      const mockHeroes = [
        { id: 1, name: 'Atlas', role: 'Tank' },
        { id: 3, name: 'Tigreal', role: 'Tank' },
        { id: 15, name: 'Uranus', role: 'Tank' },
        { id: 20, name: 'Khufra', role: 'Tank' },
        { id: 25, name: 'Edith', role: 'Tank' },
      ];

      jest
        .spyOn(HeroesRepository.prototype, 'findByRole')
        .mockResolvedValue(mockHeroes as any);

      const result = await service.getHeroesByRole('Tank');

      expect(result).toEqual(mockHeroes);
      expect(result.every(hero => hero.role === 'Tank')).toBe(true);
    });
  });

      describe('getHeroById', () => {
      it('deve retornar um herói pelo ID', async () => {
        const mockHero = { id: 1, name: 'Atlas', role: 'Tank' };

        jest
          .spyOn(HeroesRepository.prototype, 'findById')
          .mockResolvedValue(mockHero as any);  

         const result = await service.getHeroById(1);

          expect(result).toEqual(mockHero);
          expect(HeroesRepository.prototype.findById).toHaveBeenCalledWith(1);
      });
  });
});
 
  
    
