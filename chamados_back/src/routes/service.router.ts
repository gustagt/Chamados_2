import { Router } from "express";

import ServiceController from "../controllers/service.controller";

const  control = new ServiceController();

const serviceRouter = Router();

serviceRouter.get("/atendimentos", control.getAll.bind(control));
serviceRouter.get("/atendimentos/origem/:id", control.getOriginId.bind(control));

export default serviceRouter
