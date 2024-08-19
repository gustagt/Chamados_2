import { NextFunction, Request, Response } from "express";
import AtendimentoSistemaService from "../service/atendimentoSistema.service";

class AtendimentoSistemaController {
  private service = new AtendimentoSistemaService();

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const {status, message} = await this.service.getAll()
        res.status(status).json(message)
    } catch (error) {
        next(error)
    }
  }


}


export default AtendimentoSistemaController