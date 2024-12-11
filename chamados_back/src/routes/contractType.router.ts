import { Router } from "express";
import ContractTypeController from "../controllers/contractType.controller";

const  control = new ContractTypeController();

const contractTypeRouter = Router();
contractTypeRouter.get("/tipos-contratacoes", control.getAll.bind(control));

export default contractTypeRouter
