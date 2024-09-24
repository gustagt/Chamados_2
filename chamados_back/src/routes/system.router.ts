import { Router } from "express";

import SystemController from "../controllers/system.controller";

const  control = new SystemController();

const systemRouter = Router();

systemRouter.get("/sistemas", control.getAll.bind(control));

export default systemRouter
