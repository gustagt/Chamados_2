import { NextFunction, Request, Response } from "express";
import AtendimentoService from './../service/atendimento.service';

class AtendimentoController {
  private service = new AtendimentoService();

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const {status, message} = await this.service.getAll()
        res.status(status).json(message)
    } catch (error) {
        next(error)
    }
  }


}


export default AtendimentoController