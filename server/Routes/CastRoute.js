import express from "express";
import asyncHandler from "express-async-handler";
import Cast from "../Models/CastModel.js";


const CastRoute=express.Router();

CastRoute.get("/", asyncHandler(
    async(req,res)=>{
        const casts=await Cast.find({});
        res.json(casts);
    }
));

CastRoute.get("/:id", asyncHandler(
    async(req,res)=>{
        const cast=await Cast.findById(req.params.id);
        if(cast){
            res.json(cast);
        }else{
            res.status(404);
            throw new Error("cast not found");
        }
        
    }
));

 export default CastRoute;