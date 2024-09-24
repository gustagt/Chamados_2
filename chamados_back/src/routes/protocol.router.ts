import { Router } from "express";

import ProtocolController from "../controllers/protocol.controller";


const  control = new ProtocolController();

const protocolRouter = Router();

protocolRouter.get("/chamados",control.getAll.bind(control));
protocolRouter.post("/chamados",control.postProtocol.bind(control));
protocolRouter.get("/chamados/:id", control.getId.bind(control));
protocolRouter.put("/chamados/:id", control.put.bind(control));
protocolRouter.delete("/chamados/:id", control.delete.bind(control));




export default protocolRouter
