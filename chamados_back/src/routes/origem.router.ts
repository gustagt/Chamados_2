import { Router } from "express";
import OrigemController from "../controllers/origem.controller";

const  control = new OrigemController();

const origemRouter = Router();

origemRouter.get("/origem", control.getAll.bind(control));

export default origemRouter
