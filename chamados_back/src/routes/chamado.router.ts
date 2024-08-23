import { Router } from "express";

import ChamadoController from "../controllers/chamado.controller";

const  control = new ChamadoController();

const chamadoRouter = Router();

chamadoRouter.get("/chamado", control.getAll.bind(control));
chamadoRouter.post("/chamado", control.insert.bind(control));
chamadoRouter.get("/chamado/:id", control.getId.bind(control));
chamadoRouter.put("/chamado/:id", control.put.bind(control));
chamadoRouter.delete("/chamado/:id", control.delete.bind(control));

export default chamadoRouter
