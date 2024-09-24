import { NextFunction, Request, Response } from "express";

import ProtocolService from "../service/protocol.service";
import Protocol from "../database/models/protocol.model";
import IProtocol from "../interfaces/IProtocol";
import { respE } from "../utils/resp";

class ProtocolController {
  private service = new ProtocolService();
  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.getAll();
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }
  async getId(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.getId(req.params.id);
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async postProtocol(req: Request, res: Response, next: NextFunction) {
    try {
      const form: IProtocol = req.body;

      const { status, message } = await this.service.insert(form);
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async put(req: Request, res: Response, next: NextFunction) {
    try {
      const { message: chamado } = await this.service.getId(req.params.id);

      if (chamado instanceof Protocol) {
        const { status, message } = await this.service.put(chamado, req.body);

        res.status(status).json(message);
      } else {
        res.status(404).json(respE("Usuário não encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { message: chamado } = await this.service.getId(req.params.id);

      if (chamado instanceof Protocol) {
        const { status, message } = await this.service.delete(chamado);
        res.status(status).json(message);
      } else {
        res.status(404).json(respE("Usuário não encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }


}

export default ProtocolController;
