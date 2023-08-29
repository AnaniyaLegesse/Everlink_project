import express from "express";
import Cast from "./Models/CastModel.js";
import Data from "./data/data.js";
import asyncHandler from "express-async-handler"

const ImportData=express.Router();

ImportData.post("/casts", async(req,res)=>{
    await Cast.remove({});
    const importCasts=await Cast.insertMany(Data);
    res.send({importCasts});
});

export default ImportData;
