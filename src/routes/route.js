import express from "express";
import modelHero from "../models/modelHero.js";


const routes = express.Router();

// Listar todos os herois

routes.get("/heroes",async(req,res,next) => {
   try{
   const result = await modelHero.findAll();
   res.json({
       "message":"Sucessfuly",
       "heroes": result
   })
  }catch(err){
   const error = new Error(err);
   error.httpStatusCode=400;
   return next(error);
  }
});


// Buscar heroi cujo nome igual a endpoint

routes.get("/heroes/:name",async(req,res,next) => {
     try{
    const heroName = await modelHero.findOne({ where:{ name:req.params.name }});

     if(heroName === null){
      res.json("Heroi nao encontrado");
     } else{
    res.json({
      "message":"Sucessfuly",
      "hero":heroName
   })}
   }catch(err){
     const error = new Error(err);
     error.httpStatusCode=400;
     return next(error);
  }
});

// Buscar heroi pelo id

routes.get("/:id",async(req,res,next) => {
    try{
    const hero = await modelHero.findByPk(req.params.id);

     if(hero === null){
      res.json("Heroi nao encontrado tente outro id")
    }else{
    res.json({
     "message":"Sucessfuly",
     "hero": hero
    })}
  } catch(err){
    const error = new Error(err);
    error.httpStatusCode=400;
    return next(error);
   }
});

// Buscar heroi por funcao(role)

routes.get("/roles/:role",async(req,res,next) => {
   try{
   const heroRole = await modelHero.findAll({ where:{ roles:req.params.role }});
    if(heroRole.length === 0){
      res.json("Nenhum heroi encontrado para essa funcao")
    }else{
   res.json({
     "message":"Sucessfuly",
     "heroes": heroRole
   })}
   } catch(err){
    const error = new Error(err);
    error.httpStatusCode=400;
    return next(error);
   }
});

export default routes
