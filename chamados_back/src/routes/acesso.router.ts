import { Router } from "express";
import AcessoController from "../controllers/acesso.controller";

const  control = new AcessoController();

const acessoRouter = Router();

acessoRouter.get("/acesso", control.getAll.bind(control));

export default acessoRouter
