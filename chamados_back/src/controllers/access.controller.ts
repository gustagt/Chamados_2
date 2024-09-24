import { NextFunction, Request, Response } from "express";
import AccessService from "../service/access.service";

class AccessController {
  private service = new AccessService();

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
        const {status, message} = await this.service.getAll()
        res.status(status).json(message)
    } catch (error) {
        next(error)
    }
  }
}


export default AccessController