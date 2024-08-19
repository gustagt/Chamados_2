import { Router } from "express";
import TipoContratacaoController from "../controllers/tipoContratacao.controller";

const  control = new TipoContratacaoController();

const tipoContratacaoRouter = Router();

tipoContratacaoRouter.get("/tipo-contratacao", control.getAll.bind(control));

export default tipoContratacaoRouter
