import { NextFunction, Request, Response } from "express";
import SetorService from "../service/setor.service";

class SetorController {
  private service = new SetorService();

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const {status, message} = await this.service.getAll()
        res.status(status).json(message)
    } catch (error) {
        next(error)
    }
  }
}


export default SetorController