import { NextFunction, Request, Response } from "express";
import ChamadoSistemaInternoService from "../service/chamadoSistemInterno.service";

class ChamadoSistemaInternoController {
  private service = new ChamadoSistemaInternoService();

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const {status, message} = await this.service.getAll()
        res.status(status).json(message)
    } catch (error) {
        next(error)
    }
  }


}


export default ChamadoSistemaInternoController