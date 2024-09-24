
import { NextFunction, Request, Response } from "express";

import SectorService from "../service/sector.service";

class SectorController {
  private service = new SectorService();

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
        const {status, data} = await this.service.getAll()
        res.status(status).json(data)
    } catch (error) {
        next(error)
    }
  }
}


export default SectorController