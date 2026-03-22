"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HeroController_1 = require("../controllers/HeroController");
const routes = express_1.default.Router();
const heroController = new HeroController_1.HeroController();
routes.get("/", (req, res) => { res.json({ message: "Api mobile legend" }); });
routes.get("/heroes", async (req, res, next) => await heroController.getAllHeroesPaginated(req, res, next));
routes.get("/roles/:role", async (req, res, next) => await heroController.getHeroesByRole(req, res, next));
routes.get("/heroes/:name", async (req, res, next) => await heroController.getHeroByName(req, res, next));
routes.get("/:id", async (req, res, next) => await heroController.getHeroById(req, res, next));
exports.default = routes;
//# sourceMappingURL=route.js.map