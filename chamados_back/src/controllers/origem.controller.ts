import { NextFunction, Request, Response } from "express";
import OrigemService from "../service/origem.service";

class OrigemController {
  private service = new OrigemService();

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const {status, message} = await this.service.getAll()
        res.status(status).json(message)
    } catch (error) {
        next(error)
    }
  }
}


export default OrigemController