import express from "express";
import { HeroController } from "../controllers/HeroController";


const routes = express.Router();
const heroController = new HeroController();


routes.get("/",(req,res) =>{ res.json({message : "Api mobile legend"})});

routes.get("/heroes",async(req,res,next) => await heroController.getAllHeroesPaginated(req,res,next));

routes.get("/roles/:role",async(req,res,next) => await heroController.getHeroesByRole(req,res,next));

routes.get("/heroes/:name",async(req,res,next) => await heroController.getHeroByName(req,res,next));

routes.get("/:id",async(req,res,next) => await heroController.getHeroById(req,res,next));


export default routes
