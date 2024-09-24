import { NextFunction, Request, Response } from "express";
import AccessService from "../service/access.service";

class AccessController {
  private service = new AccessService();

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
        const {status, data} = await this.service.getAll()
        res.status(status).json(data)
    } catch (error) {
        next(error)
    }
  }
}


export default AccessController