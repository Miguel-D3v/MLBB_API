"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HeroController_1 = require("../../src/controllers/HeroController");
jest.mock('../../src/services/HeroesServices');
describe('HeroController', () => {
    let controller;
    let mockRequest;
    let mockResponse;
    let mockNext;
    beforeEach(() => {
        jest.clearAllMocks();
        controller = new HeroController_1.HeroController();
        mockRequest = {
            query: {},
            params: {},
        };
        mockResponse = {
            json: jest.fn().mockReturnThis(),
            status: jest.fn().mockReturnThis(),
        };
        mockNext = jest.fn();
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
            mockRequest.query = { offset: '0', limit: '10' };
            await controller.getAllHeroesPaginated(mockRequest, mockResponse, mockNext);
            expect(mockResponse.json).toHaveBeenCalled();
        });
    });
    describe('getHeroByName', () => {
        it('deve retornar herói pelo nome', async () => {
            const mockHero = { id: 1, name: 'Atlas', role: 'Tank' };
            mockRequest.params = { name: 'Atlas' };
            await controller.getHeroByName(mockRequest, mockResponse, mockNext);
            expect(mockResponse.json).toHaveBeenCalled();
        });
    });
    describe('getHeroById', () => {
        it('deve retornar herói pelo ID', async () => {
            const mockHero = { id: 1, name: 'Atlas', role: 'Tank' };
            mockRequest.params = { id: '1' };
            await controller.getHeroById(mockRequest, mockResponse, mockNext);
            expect(mockResponse.json).toHaveBeenCalled();
        });
    });
    describe('getHeroesByRole', () => {
        it('deve retornar heróis pela função', async () => {
            const mockHeroes = [
                { id: 1, name: 'Atlas', role: 'Tank' },
                { id: 3, name: 'Tigreal', role: 'Tank' },
                { id: 15, name: 'Uranus', role: 'Tank' },
                { id: 20, name: 'Khufra', role: 'Tank' },
                { id: 25, name: 'Edith', role: 'Tank' },
            ];
            mockRequest.params = { role: 'Tank' };
            await controller.getHeroesByRole(mockRequest, mockResponse, mockNext);
            expect(mockResponse.json).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=HeroController.spec.js.map