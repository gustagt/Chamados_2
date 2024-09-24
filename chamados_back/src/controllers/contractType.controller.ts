import { NextFunction, Request, Response } from "express";

import ContractTypeService from "../service/contractType.service";

class ContractTypeController {
  private service = new ContractTypeService();

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const {status, message} = await this.service.getAll()
        res.status(status).json(message)
    } catch (error) {
        next(error)
    }
  }
}


export default ContractTypeController