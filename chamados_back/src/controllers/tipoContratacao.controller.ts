import { NextFunction, Request, Response } from "express";

import TipoContratacaoService from "../service/tipoContratacao.service";

class TipoContratacaoController {
  private service = new TipoContratacaoService();

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const {status, message} = await this.service.getAll()
        res.status(status).json(message)
    } catch (error) {
        next(error)
    }
  }
}


export default TipoContratacaoController