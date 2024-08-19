import { NextFunction, Request, Response } from "express";

import SolicitanteService from "../service/solicitante.service";

class SolicitanteController {
  private service = new SolicitanteService();

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const {status, message} = await this.service.getAll()
        res.status(status).json(message)
    } catch (error) {
        next(error)
    }
  }
}


export default SolicitanteController