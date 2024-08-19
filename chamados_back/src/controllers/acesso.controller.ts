import { NextFunction, Request, Response } from "express";
import AcessoService from "../service/acesso.service";

class AcessoController {
  private service = new AcessoService();

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const {status, message} = await this.service.getAll()
        res.status(status).json(message)
    } catch (error) {
        next(error)
    }
  }
}


export default AcessoController