import { Router } from "express";
import acessoRouter from "./acesso.router";
import atendimentoRouter from "./atendimento.router";
import atendimentoSistemaRouter from "./atendimentoSistema.router";
import chamadoRouter from "./chamado.router";
import chamadoSistemaInternoRouter from "./chamadoSistemainterno.router";
import origemRouter from "./origem.router";
import setorRouter from "./setor.router";
import solicitanteRouter from "./solicitante.router";
import statusRouter from "./status.router";
import tipoContratacaoRouter from "./tipoContratacao.router";
import userRouter from "./user.router";
import userHasAcessoRouter from "./userHasAcesso.router";

const router = Router()

router.use(acessoRouter)
router.use(atendimentoRouter)
router.use(atendimentoSistemaRouter)
router.use(chamadoRouter)
router.use(chamadoSistemaInternoRouter)
router.use(origemRouter)
router.use(setorRouter)
router.use(solicitanteRouter)
router.use(statusRouter)
router.use(tipoContratacaoRouter)
router.use(userRouter)
router.use(userHasAcessoRouter)

export default router