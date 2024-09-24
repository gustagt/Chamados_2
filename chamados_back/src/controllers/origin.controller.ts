import { NextFunction, Request, Response } from "express";
import OriginService from "../service/origin.service";

class OriginController {
  private service = new OriginService();

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
        const {status, data} = await this.service.getAll()
        res.status(status).json(data)
    } catch (error) {
        next(error)
    }
  }
}


export default OriginController