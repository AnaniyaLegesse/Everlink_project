import express from 'express';
import dotenv from "dotenv";
import connectDatabase from './config/MongoDB.js';
import CastRoute from './Routes/CastRoute.js';


dotenv.config();
connectDatabase();
const app=express();



// app.use("/api/import",ImportData);

//LOAD DATA FROM SERVER
app.use("/api/casts", CastRoute);
 
//SINGLE DATA FROM SERVER

app.get("/:id",(req,res)=>{
    const cast=Data.find((c)=>c.id===req.params.id);
    res.json(cast);
});

app.get("/",(req,res)=>{
    res.send('API is running....');
});

const PORT =process.env.PORT || 1000;
app.listen(PORT , console.log(`server run in port ${PORT}`));