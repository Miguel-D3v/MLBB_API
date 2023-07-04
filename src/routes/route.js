import express from "express";
import modelHero from "../models/modelHero.js";

const routes = express.Router();

routes.get("/", (req, res) => {
   res.json({ message: "Testando" });
});

routes.get("/heroes",async(req,res) => {
   const result = await modelHero.findAll();
   res.json(result)
})
export default routes
