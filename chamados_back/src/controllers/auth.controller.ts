import { NextFunction, Request, Response } from "express";

import UserLdap from "../service/ldap/user.service";
import jwt from "../utils/auth";
import { respE } from "../utils/resp";

class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const username = req.body.username;
      const password = req.body.password;

      const { status, message } = await UserLdap.authenticate(
        username,
        password
      );

      if(status === 200){
        res.status(status).json({ user: message });
      }else{
        res.status(status).json({ error: message });
      }

    } catch (error) {
      next(error);
    }
  }


  async authenticate(req: Request, res: Response, next: NextFunction) {
    try {
      try {
        const token = req.headers.authorization;
        if (token) {
          jwt.decode(token);
        } else return res.status(401).json(respE("Token não encontrdo:"));
      } catch (error) {
        console.log(error);
        return res.status(401).json({ error: error });
      }

      next();
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
