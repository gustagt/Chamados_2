import { Router } from "express";
import OriginController from "../controllers/origin.controller";

const  control = new OriginController();

const originRouter = Router();

originRouter.get("/origens", control.getAll.bind(control));

export default originRouter
