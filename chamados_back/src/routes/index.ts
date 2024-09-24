import { Router } from "express";
import accessRouter from "./access.router";
import serviceRouter from "./service.router";
import systemRouter from "./system.router";
import protocolRouter from "./protocol.router";
import originRouter from "./origin.router";
import sectorRouter from "./sector.router";
import statusRouter from "./status.router";
import contractTypeRouter from "./contractType.router";
import userRouter from "./user.router";
import userAccessRouter from "./userAccess.router";
import loginRouter from "./auth.router";

import AuthController from '../controllers/auth.controller';



const router = Router()
const  authControl = new AuthController();

router.use(loginRouter)
router.use(authControl.authenticate.bind(authControl))
router.use(accessRouter)
router.use(serviceRouter)
router.use(systemRouter)
router.use(protocolRouter)
router.use(originRouter)
router.use(sectorRouter)
router.use(statusRouter)
router.use(contractTypeRouter)
router.use(userRouter)
router.use(userAccessRouter)

export default router