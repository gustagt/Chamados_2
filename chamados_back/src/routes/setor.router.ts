import { Router } from "express";
import SetorController from "../controllers/setor.controller";

const  control = new SetorController();

const setorRouter = Router();

setorRouter.get("/setor", control.getAll.bind(control));

export default setorRouter
