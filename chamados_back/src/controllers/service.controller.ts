import { NextFunction, Request, Response } from "express";
import ServiceService from '../service/service.service';

class ServiceController {
  private service = new ServiceService();

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
        const {status, message} = await this.service.getAll()
        res.status(status).json(message)
    } catch (error) {
        next(error)
    }
  }  
  async getOriginId(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.id
        const {status, message} = await this.service.getOriginId(id)
        res.status(status).json(message)
    } catch (error) {
        next(error)
    }
  }


}


export default ServiceController