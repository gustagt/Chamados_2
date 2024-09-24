import { NextFunction, Request, Response } from "express";

import UserService from "../service/user.service";


class UserController {
  private service = new UserService();

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
        const {status, data} = await this.service.getAll()
        res.status(status).json(data)
    } catch (error) {
        next(error)
    }
  }
}


export default UserController