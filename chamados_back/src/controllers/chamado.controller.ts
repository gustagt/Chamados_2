import { NextFunction, Request, Response } from "express";

import ChamadoService from "../service/chamado.service";
import ChamadoSistemaInternoService from "../service/chamadoSistemInterno.service";
import UserService from "../service/user.service";
import SolicitanteService from "../service/solicitante.service";
import Chamado from "../database/models/chamado";
import { authenticateUser } from "../ldap/config";

class ChamadoController {
  private service = new ChamadoService();
  private serviceSi = new ChamadoSistemaInternoService();
  private serviceUser = new UserService();
  private serviceSolicitante = new SolicitanteService();

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

  async insert(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.insert(req.body);
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async put(req: Request, res: Response, next: NextFunction) {
    try {
      const { message: chamado } = await this.service.getId(req.params.id);

      if (chamado instanceof Chamado) {
        const { status, message } = await this.service.put(chamado, req.body);

        res.status(status).json(message);
      } else {
        res.status(404).json({ message: "Usuário não encontrado" });
      }
    } catch (error) {
      next(error);
    }
  }
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { message: chamado } = await this.service.getId(req.params.id);

      if (chamado instanceof Chamado) {
        const { status, message } = await this.service.delete(chamado);
        res.status(status).json(message);
      } else {
        res.status(404).json({ message: "Usuário não encontrado" });
      }
    } catch (error) {
      next(error);
    }
  }
}

export default ChamadoController;
