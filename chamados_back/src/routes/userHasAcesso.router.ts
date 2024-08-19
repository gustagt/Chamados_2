import { Router } from "express";

import UserHasAcessoController from '../controllers/userHasAcesso.controller';

const  control = new UserHasAcessoController();

const userHasAcessoRouter = Router();

userHasAcessoRouter.get("/user-has-acesso", control.getAll.bind(control));

export default userHasAcessoRouter
