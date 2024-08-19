import { Router } from "express";
import UserController from "../controllers/user.controller";

const  control = new UserController();

const userRouter = Router();

userRouter.get("/user", control.getAll.bind(control));

export default userRouter
