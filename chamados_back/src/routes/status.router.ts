import { Router } from "express";
import StatusController from "../controllers/status.controller";

const  control = new StatusController();

const statusRouter = Router();

statusRouter.get("/status", control.getAll.bind(control));

export default statusRouter
