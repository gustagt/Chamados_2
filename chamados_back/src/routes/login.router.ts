import { Router } from "express";
import LoginController from "../controllers/auth.controller";

const  control = new LoginController();

const loginRouter = Router();

loginRouter.post("/login", control.login.bind(control));

export default loginRouter
