import { NextFunction, Request, Response } from "express";

import UserHasAcessoService from "../service/userHasAcesso.service";


class UserHasAcessoController {
  private service = new UserHasAcessoService();

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const {status, message} = await this.service.getAll()
        res.status(status).json(message)
    } catch (error) {
        next(error)
    }
  }
}


export default UserHasAcessoController