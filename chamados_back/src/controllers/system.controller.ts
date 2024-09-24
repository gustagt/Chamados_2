import { NextFunction, Request, Response } from "express";
import SystemService from "../service/system.service";

class SystemController {
  private service = new SystemService();

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
        const {status, message} = await this.service.getAll()
        res.status(status).json(message)
    } catch (error) {
        next(error)
    }
  }


}


export default SystemController