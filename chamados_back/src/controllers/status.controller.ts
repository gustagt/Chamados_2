import { NextFunction, Request, Response } from "express";

import StatusService from "../service/status.service";

class StatusController {
  private service = new StatusService();

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const {status, message} = await this.service.getAll()
        res.status(status).json(message)
    } catch (error) {
        next(error)
    }
  }
}


export default StatusController