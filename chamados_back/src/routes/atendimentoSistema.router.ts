import { Router } from "express";

import AtendimentoSistemaController from "../controllers/atendimentoSistema.controller";

const  control = new AtendimentoSistemaController();

const atendimentoSistemaRouter = Router();

atendimentoSistemaRouter.get("/atendimento-sistema", control.getAll.bind(control));

export default atendimentoSistemaRouter
