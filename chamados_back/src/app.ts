import express, { NextFunction, Router, Request, Response } from "express";
import cors from "cors";
import router from "./routes";


const app = express();

app.use(express.json());
app.use(cors());

app.use(router)
app.use((err: Error, _req: Request, res: Response, _next: NextFunction)=>{
    res.status(500).json({error: err.message})
}) 

export default app;
