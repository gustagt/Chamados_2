import { NextFunction, Request, Response } from "express";

import UserAccessService from "../service/userAccess.service";


class UserAccessController {
  private service = new UserAccessService();

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
        const {status, data} = await this.service.getAll()
        res.status(status).json(data)
    } catch (error) {
        next(error)
    }
  }
}


export default UserAccessController