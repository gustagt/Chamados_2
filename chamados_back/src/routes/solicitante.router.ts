import { Router } from "express";
import SolicitanteController from "../controllers/solicitante.controller";

const  control = new SolicitanteController();

const solicitanteRouter = Router();

solicitanteRouter.get("/solicitante", control.getAll.bind(control));

export default solicitanteRouter
