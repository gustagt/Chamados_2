import { NextFunction, Request, Response } from "express";

import UserService from "../service/user.service";
import User from "../database/models/user.model";
import { respE } from "../utils/resp";
import IUser from "../interfaces/IUser";


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
  async put(req: Request, res: Response, next: NextFunction) {
    try {
      const { data: user } = await this.service.getId(req.params.id);
      const form: IUser = req.body;

      if (user instanceof User) {
        const { status, data } = await this.service.put(user, form);
   
        res.status(status).json(data);
   
      } else {
        res.status(404).json(respE("Protocolo não encontrado"));
      }

    } catch (error) {
      next(error);
    }
  }
}


export default UserController