import { Router } from "express";

import ChamadoController from "../controllers/chamado.controller";

const  control = new ChamadoController();

const chamadoRouter = Router();

chamadoRouter.get("/chamado", control.getAll.bind(control));

export default chamadoRouter
