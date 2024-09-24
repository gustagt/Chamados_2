import { NextFunction, Request, Response } from "express";

import StatusService from "../service/status.service";

class StatusController {
  private service = new StatusService();

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
        const {status, data} = await this.service.getAll()
        res.status(status).json(data)
    } catch (error) {
        next(error)
    }
  }
}


export default StatusController