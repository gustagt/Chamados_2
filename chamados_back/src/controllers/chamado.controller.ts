import { NextFunction, Request, Response } from "express";

import ChamadoService from "../service/chamado.service";

class ChamadoController {
  private service = new ChamadoService();

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const {status, message} = await this.service.getAll()
        res.status(status).json(message)
    } catch (error) {
        next(error)
    }
  }


}


export default ChamadoController