import { Router } from "express";
import ChamadoSistemaInternoController from "../controllers/chamadoSistemaInterno.controller";

const  control = new ChamadoSistemaInternoController();

const chamadoSistemaInternoRouter = Router();

chamadoSistemaInternoRouter.get("/chamado-sistema-interno", control.getAll.bind(control));

export default chamadoSistemaInternoRouter
