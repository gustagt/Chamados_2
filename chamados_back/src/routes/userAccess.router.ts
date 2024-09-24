import { Router } from "express";

import UserAccessController from '../controllers/userHasAcesso.controller';

const  control = new UserAccessController();

const userAccessRouter = Router();

userAccessRouter.get("/user-has-acesso", control.getAll.bind(control));

export default userAccessRouter
