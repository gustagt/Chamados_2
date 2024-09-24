import { NextFunction, Request, Response } from "express";
import OriginService from "../service/origin.service";

class OriginController {
  private service = new OriginService();

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
        const {status, message} = await this.service.getAll()
        res.status(status).json(message)
    } catch (error) {
        next(error)
    }
  }
}


export default OriginController