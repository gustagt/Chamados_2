import { Router } from "express";

import AtendimentoController from "../controllers/atendimento.controller";

const  control = new AtendimentoController();

const atendimentoRouter = Router();

atendimentoRouter.get("/atendimento", control.getAll.bind(control));

export default atendimentoRouter
