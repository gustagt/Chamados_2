import { Router } from "express";
import AccessController from "../controllers/access.controller";

const  control = new AccessController();

const accessRouter = Router();

accessRouter.get("/acessos", control.getAll.bind(control));

export default accessRouter
