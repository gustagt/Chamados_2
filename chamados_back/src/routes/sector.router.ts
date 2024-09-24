import { Router } from "express";
import SectorController from "../controllers/sector.controller";

const  control = new SectorController();

const sectorRouter = Router();

sectorRouter.get("/setores", control.getAll.bind(control));

export default sectorRouter
