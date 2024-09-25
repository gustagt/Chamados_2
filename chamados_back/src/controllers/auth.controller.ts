import { NextFunction, Request, Response } from "express";

import UserLdap from "../service/ldap/user.service";
import jwt from "../utils/auth";
import { respE } from "../utils/resp";

class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const username = req.body.username;
      const password = req.body.password;

      const { status, data } = await UserLdap.authenticate(
        username,
        password
      );

      if(status === 200){
        res.status(status).json({ user: data });
      }else{
        res.status(status).json({ error: data });
      }

    } catch (error) {
      next(error);
    }
  }


  async authenticate(req: Request, res: Response, next: NextFunction) {
    try {
      
        const token = req.headers.authorization;
        if (!token) {
          return res.status(401).json(respE("Token não encontrado:"));
        } 
        
        jwt.decode(token);

      next();
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
